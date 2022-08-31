import { Box, Drawer, styled, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import BaseBlockTitleBox from "../../components/box/textBox/BaseBlockTitleBox";
import * as yup from "yup";
import TextInput from "../../components/form/TextInput";
import { KOREA_CENTER_LAT, KOREA_CENTER_LON } from "../../data/constants/baseCoord";
import { fromLonLatToVariousCoords } from "../../libs/d2/mapSettings/coordsConverter";

interface MoveMapCenterByCoordDrawerProps {
	open: boolean;
	setOpen: (set: boolean) => void;
}

const coordSchema = yup.object({
	lon: yup.number().defined("경도 입력"),
	lat: yup.number().defined("위도 입력"),
	dmsLon: yup.string().defined("dms 경도 입력하라"),
	dmsLat: yup.string().defined("dms 위도 입력하라"),
	utmZone: yup.number().min(0).max(60).defined("존 번호를 입력"),
	utmBand: yup.string().max(1, "알파벳 한글자만 들어감"),
	utmEasting: yup.number().min(100000).max(900000).defined("10만 이상 90만 이하"),
	utmNorthing: yup.number().min(1).max(9999999).defined("1~9,999,999까지"),
});

type CoordValues = yup.InferType<typeof coordSchema>;

/**
 * 특정 좌표 (Lonlat, mgrs) 등을 입력하면 자동 변환하고 해당 좌표를 지도의 중심으로 놓도록 이동시키는 Drawer로,
 * MapToolbar 내 버튼 클릭 시 실해됨
 * @param {MoveMapCenterByCoordDrawerProps} MoveMapCenterByCoordDrawerProps
 * @returns {JSX.Element} React Component(Drawer)
 */

const MoveMapCenterByCoordDrawer = ({ open, setOpen }: MoveMapCenterByCoordDrawerProps) => {
	const {
		dms: dmsInitial,
		utm: utmInitial,
		// mgrs: mgrsInitial,
		// geoRef: geoRefInitial,
		// gars: garsInitial,
	} = fromLonLatToVariousCoords(KOREA_CENTER_LON, KOREA_CENTER_LAT);

	const initialValues: CoordValues = {
		lon: KOREA_CENTER_LON,
		lat: KOREA_CENTER_LAT,
		dmsLon: dmsInitial[0],
		dmsLat: dmsInitial[1],
		utmZone: utmInitial.zone,
		utmBand: utmInitial.band,
		utmEasting: utmInitial.easting,
		utmNorthing: utmInitial.northing,
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
								console.log(values);
							} catch (err) {
								console.log(err);
							}
						}}
						validationSchema={coordSchema}
					>
						{({ values, handleChange, touched, errors }) => (
							<Form>
								<Typography variant="body1" mb={2} sx={{ fontWeight: 500 }} gutterBottom>
									경위도
								</Typography>
								<FlexBox>
									<TextInput
										label="경도"
										name="lon"
										value={values.lon}
										onChange={handleChange}
										type="number"
										error={touched.lon && Boolean(errors.lon)}
										helperText={touched.lon && errors.lon}
										variant="outlined"
										autoFocus
										sx={{ mr: 1, mb: "1.5%" }}
									/>
									<TextInput
										label="위도"
										name="lat"
										value={values.lat}
										onChange={handleChange}
										type="number"
										error={touched.lat && Boolean(errors.lat)}
										helperText={touched.lat && errors.lat}
										variant="outlined"
										autoFocus
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
								<Typography variant="body1" mb={2} sx={{ fontWeight: 500 }} gutterBottom>
									DMS 경위도
								</Typography>
								<FlexBox>
									<TextInput
										label="DMS 경도"
										name="dmsLon"
										value={values.dmsLon}
										onChange={handleChange}
										type="string"
										error={touched.dmsLon && Boolean(errors.dmsLon)}
										helperText={touched.dmsLon && errors.dmsLon}
										variant="outlined"
										autoFocus
										sx={{ mr: 1, mb: "1.5%" }}
									/>
									<TextInput
										label="DMS 위도"
										name="dmsLat"
										value={values.dmsLat}
										onChange={handleChange}
										type="string"
										error={touched.dmsLat && Boolean(errors.dmsLat)}
										helperText={touched.dmsLat && errors.dmsLat}
										variant="outlined"
										autoFocus
										sx={{ marginBottom: "1.5%" }}
									/>
								</FlexBox>
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
	marginTop: "10%",
}));

const FlexBox = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
}));
