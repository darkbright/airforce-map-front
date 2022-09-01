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
} from "../../libs/d2/mapSettings/coordsConverter";
import SpaceBetweenTextBox from "../../components/box/textBox/SpaceBetweenTextBox";
import TextButton from "../../components/button/TextButton";
import BaseButton from "../../components/button/BaseButton";
import D2MapModule from "../../libs/d2/D2MapModule";

const { CoordManager } = D2MapModule;

interface MoveMapCenterByCoordDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

/**
 * coord form value 스키마
 */
const coordSchema = yup.object({
	lon: yup.number().defined("경도 입력"),
	lat: yup.number().defined("위도 입력"),
	dmsLon: yup.string().defined("dms 경도 입력하라"),
	dmsLat: yup.string().defined("dms 위도 입력하라"),
	utm: yup.object({
		zone: yup.number().min(0).max(60).defined("존 번호를 입력"),
		band: yup.string().max(1, "알파벳 한글자만 들어감"),
		easting: yup.number().min(100000).max(900000).defined("10만 이상 90만 이하"),
		northing: yup.number().min(1).max(9999999).defined("1~9,999,999까지"),
	}),
	mgrs: yup.object({
		zone: yup.number().min(0).max(60).defined("존 번호를 입력"),
		band: yup.string().max(1, "알파벳 한글자만 들어감"),
		e100k: yup.string(),
		n100k: yup.string(),
		easting: yup.number().min(1).max(99999).defined("1~99,999까지"),
		northing: yup.number().min(1).max(99999).defined("1~99,999까지"),
	}),
	geoRef: yup.string(),
	gars: yup.string(),
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
							} catch (err) {
								console.log(err);
							}
						}}
						validationSchema={coordSchema}
					>
						{({ values, handleChange, setValues, touched, errors }) => (
							<Form>
								<div style={{ textAlign: "right" }}>
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
