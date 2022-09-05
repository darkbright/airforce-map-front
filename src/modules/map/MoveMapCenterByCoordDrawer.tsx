import { Box, Drawer, styled } from "@mui/material";
import { Form, Formik } from "formik";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import * as yup from "yup";
import TextInput from "../../components/form/TextInput";
import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../data/constants/baseCoord";
import {
	fromDMSToVariousCoords,
	fromGarsToVariousCoords,
	fromGeoRefToVariousCoords,
	fromLonLatToVariousCoords,
	fromMGRSToVariousCoords,
	fromUtmToVariousCoords,
} from "../../libs/d2/mapSettings/utils/coordsConverter";
import SpaceBetweenTextBox from "../../components/box/textBox/SpaceBetweenTextBox";
import TextButton from "../../components/button/TextButton";
import BaseButton from "../../components/button/BaseButton";
import D2MapModule from "../../libs/d2/D2MapModule";
import { mgrsBandRegex, mgrsSquareIdRegex } from "../../utils/regex";

const { CoordManager } = D2MapModule;

interface MoveMapCenterByCoordDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

/**
 * coord form value 스키마
 */
const coordSchema = yup.object({
	lon: yup
		.number()
		.min(-180, "경도는 -180 미만일 수 없습니다")
		.max(180, "경도는 180을 초과할 수 없습니다.")
		.defined("-180 ~ 180"),
	lat: yup
		.number()
		.min(-90, "위도는 -90 미만일 수 없습니다")
		.max(90, "위도는 90을 초과할 수 없습니다.")
		.defined("-90 ~ 90"),
	dmsLon: yup.string().defined("127°01′39″E 와 같은 형식으로 입력하세요"),
	dmsLat: yup.string().defined(" 37°29′53″N 와 같은 형식으로 입력하세요"),
	utm: yup.object({
		zone: yup
			.number()
			.min(0, "0 미만은 불가능합니다")
			.max(60, "60을 초과할 수 없습니다")
			.defined("0부터 60까지"),
		band: yup.string().matches(mgrsBandRegex, "O, I, Y, Z를 제외한 하나의 대문자만 허용"),
		easting: yup
			.number()
			.min(100000, "10만 이상만 가능합니다")
			.max(900000, "90만 이하로만 가능합니다")
			.defined("10만 이상 90만 이하"),
		northing: yup
			.number()
			.min(1, "1이상만 가능합니다")
			.max(9999999, "9,999,999 미만만 가능합니다")
			.defined("1~9,999,999까지"),
	}),
	mgrs: yup.object({
		zone: yup
			.number()
			.min(0, "0이상만 가능합니다")
			.max(60, "60 이하만 가능합니다")
			.defined("0부터 60까지"),
		band: yup.string().matches(mgrsBandRegex, "O, I, Y, Z를 제외한 하나의 대문자만 허용"),
		e100k: yup.string().matches(mgrsSquareIdRegex, "O, I를 제외한 하나의 대문자만 허용"),
		n100k: yup.string().matches(mgrsSquareIdRegex, "O, I를 제외한 하나의 대문자만 허용"),
		easting: yup
			.number()
			.min(1, "1 이상만 가능")
			.max(99999, "99,999 이하만 가능")
			.defined("1~99,999까지"),
		northing: yup
			.number()
			.min(1, "1 이상만 가능")
			.max(99999, "99,999 이하만 가능")
			.defined("1~99,999까지"),
	}),
	geoRef: yup.string().defined("WJHH 01654 29875 와 같은 형식으로 입력하세요"),
	gars: yup.string().defined("615LQ11 와 같은 형식으로 입력하세요"),
});

type CoordValues = yup.InferType<typeof coordSchema>;

/**
 * 특정 좌표 (Lonlat, mgrs) 등을 입력하면 자동 변환하고 해당 좌표를 지도의 중심으로 놓도록 이동시키는 Drawer로,
 * MapToolbar 내 버튼 클릭 시 실해됨
 * @param {MoveMapCenterByCoordDrawerProps} MoveMapCenterByCoordDrawerProps
 * @returns {JSX.Element} React Component(Drawer)
 */
const MoveMapCenterByCoordDrawer = ({ open, setOpen }: MoveMapCenterByCoordDrawerProps) => {
	const { dmsLon, dmsLat, utm, mgrs, geoRef, gars } = fromLonLatToVariousCoords(
		KOREA_CENTER_LON,
		KOREA_CENTER_LAT,
	);

	// 최초값으로 대한민국 중심 경위도에 변환된 값이 들어감
	const initialValues: CoordValues = {
		lon: KOREA_CENTER_LON,
		lat: KOREA_CENTER_LAT,
		dmsLon,
		dmsLat,
		utm,
		mgrs,
		geoRef,
		gars,
	};

	return (
		<Drawer sx={{ opacity: 0.98 }} anchor="right" open={open} onClose={() => setOpen(false)}>
			<Box sx={{ width: 480, padding: "10% 5%" }} role="combobox">
				<BaseBlockTitleBox
					title="지도 좌표 설정"
					subtitle="좌표를 입력하여 지도 중심을 이동합니다."
				/>
				<Root>
					<Formik
						enableReinitialize
						initialValues={initialValues}
						onSubmit={(values) => {
							try {
								CoordManager.setGeoAnimatedMoveCenter(values.lon, values.lat, 3);
								setOpen(false);
							} catch (err) {
								console.log(err);
							}
						}}
						validationSchema={coordSchema}
					>
						{({ values, handleChange, setValues, touched, errors }) => (
							<Form>
								<div style={{ textAlign: "right", marginBottom: 10 }}>
									<BaseButton type="submit" title="지도에 반영" />
								</div>

								{/* 위경도 */}
								<SpaceBetweenTextBox title="경위도" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromLonLatToVariousCoords(values.lon, values.lat))}
									/>
								</SpaceBetweenTextBox>
								<FlexBox>
									<TextInput
										size="small"
										label="경도"
										name="lon"
										value={values.lon}
										onChange={handleChange}
										type="number"
										error={touched.lon && Boolean(errors.lon)}
										helperText={Boolean(errors.lon) && String(errors.lon)}
										variant="outlined"
										autoFocus
										sx={{ mr: 1, mb: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="위도"
										name="lat"
										value={values.lat}
										onChange={handleChange}
										type="number"
										error={touched.lat && Boolean(errors.lat)}
										helperText={Boolean(errors.lat) && String(errors.lat)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								{/* DMS 경위도 */}
								<SpaceBetweenTextBox title="DMS 경위도" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromDMSToVariousCoords(values.dmsLon, values.dmsLat))}
									/>
								</SpaceBetweenTextBox>
								<FlexBox>
									<TextInput
										size="small"
										label="DMS 경도"
										name="dmsLon"
										value={values.dmsLon}
										onChange={handleChange}
										type="text"
										error={touched.dmsLon && Boolean(errors.dmsLon)}
										helperText={Boolean(errors.dmsLon) && String(errors.dmsLon)}
										variant="outlined"
										sx={{ mr: 1, mb: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="DMS 위도"
										name="dmsLat"
										value={values.dmsLat}
										onChange={handleChange}
										type="text"
										error={touched.dmsLat && Boolean(errors.dmsLat)}
										helperText={Boolean(errors.dmsLat) && String(errors.dmsLat)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								{/* UTM */}
								<SpaceBetweenTextBox title="UTM" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromUtmToVariousCoords(values.utm))}
									/>
								</SpaceBetweenTextBox>
								<FlexBox>
									<TextInput
										size="small"
										label="UTM Zone"
										name="utm.zone"
										value={values.utm.zone}
										onChange={handleChange}
										type="number"
										error={touched.utm?.zone && Boolean(errors.utm?.zone)}
										helperText={Boolean(errors.utm?.zone) && String(errors.utm?.zone)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="UTM Band"
										name="utm.band"
										value={values.utm.band}
										onChange={handleChange}
										type="text"
										error={touched.utm?.band && Boolean(errors.utm?.band)}
										helperText={Boolean(errors.utm?.band) && String(errors.utm?.band)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								<FlexBox>
									<TextInput
										size="small"
										label="UTM Easting"
										name="utm.easting"
										value={values.utm.easting}
										onChange={handleChange}
										type="number"
										error={touched.utm?.easting && Boolean(errors.utm?.easting)}
										helperText={Boolean(errors.utm?.easting) && String(errors.utm?.easting)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="UTM Northing"
										name="utm.northing"
										value={values.utm.northing}
										onChange={handleChange}
										type="number"
										error={touched.utm?.northing && Boolean(errors.utm?.northing)}
										helperText={Boolean(errors.utm?.northing) && String(errors.utm?.northing)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								{/* MGRS */}
								<SpaceBetweenTextBox title="MGRS" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromMGRSToVariousCoords(values.mgrs))}
									/>
								</SpaceBetweenTextBox>
								<FlexBox>
									<TextInput
										size="small"
										label="MGRS Zone"
										name="mgrs.zone"
										value={values.mgrs.zone}
										onChange={handleChange}
										type="number"
										error={touched.mgrs?.zone && Boolean(errors.mgrs?.zone)}
										helperText={Boolean(errors.mgrs?.zone) && String(errors.mgrs?.zone)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="MGRS Band"
										name="mgrs.band"
										value={values.mgrs.band}
										onChange={handleChange}
										type="text"
										error={touched.mgrs?.band && Boolean(errors.mgrs?.band)}
										helperText={Boolean(errors.mgrs?.band) && String(errors.mgrs?.band)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="MGRS E100k"
										name="mgrs.e100k"
										value={values.mgrs.e100k}
										onChange={handleChange}
										type="text"
										error={touched.mgrs?.e100k && Boolean(errors.mgrs?.e100k)}
										helperText={Boolean(errors.mgrs?.e100k) && String(errors.mgrs?.e100k)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="MGRS N100k"
										name="mgrs.n100k"
										value={values.mgrs.n100k}
										onChange={handleChange}
										type="text"
										error={touched.mgrs?.n100k && Boolean(errors.mgrs?.n100k)}
										helperText={Boolean(errors.mgrs?.n100k) && String(errors.mgrs?.n100k)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								<FlexBox>
									<TextInput
										size="small"
										label="MGRS Easting"
										name="mgrs.easting"
										value={values.mgrs.easting}
										onChange={handleChange}
										type="number"
										error={touched.mgrs?.easting && Boolean(errors.mgrs?.easting)}
										helperText={Boolean(errors.mgrs?.easting) && String(errors.mgrs?.easting)}
										variant="outlined"
										sx={{ mr: 1, marginBottom: "1.5%" }}
									/>
									<TextInput
										size="small"
										label="MGRS Northing"
										name="MGRS.northing"
										value={values.mgrs.northing}
										onChange={handleChange}
										type="number"
										error={touched.mgrs?.northing && Boolean(errors.mgrs?.northing)}
										helperText={Boolean(errors.mgrs?.northing) && String(errors.mgrs?.northing)}
										variant="outlined"
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								{/* GeoRef */}
								<SpaceBetweenTextBox title="GeoRef" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromGeoRefToVariousCoords(values.geoRef!))}
									/>
								</SpaceBetweenTextBox>
								<TextInput
									size="small"
									label="GeoRef"
									name="geoRef"
									value={values.geoRef}
									onChange={handleChange}
									type="text"
									error={touched.geoRef && Boolean(errors.geoRef)}
									helperText={Boolean(errors.geoRef) && String(errors.geoRef)}
									variant="outlined"
									sx={{ marginBottom: "1.5%" }}
								/>
								{/* Gars */}
								<SpaceBetweenTextBox title="GARS" marginBottom={10}>
									<TextButton
										title="적용"
										type="button"
										onClick={() => setValues(fromGarsToVariousCoords(values.gars!))}
									/>
								</SpaceBetweenTextBox>
								<TextInput
									size="small"
									label="GARS"
									name="gars"
									value={values.gars}
									onChange={handleChange}
									type="text"
									error={touched.gars && Boolean(errors.gars)}
									helperText={Boolean(errors.gars) && String(errors.gars)}
									variant="outlined"
									sx={{ marginBottom: "1.5%" }}
								/>
							</Form>
						)}
					</Formik>
				</Root>
			</Box>
		</Drawer>
	);
};

export default MoveMapCenterByCoordDrawer;

const Root = styled("div")(() => ({
	marginTop: "5%",
}));

const FlexBox = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
}));
