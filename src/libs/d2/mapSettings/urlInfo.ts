const URL_HEADER = `${process.env.REACT_APP_MAP_SERVER_URL}`;

/**
 * Map Server 내 상세 지도를 가져올 URL 목록
 */
export default {
	map: {
		baseLayer: `${URL_HEADER}/TARTMS/World_TMS/{z}/{x}/{-y}.png`,
		backgroundLayer: `${URL_HEADER}/TARTMS/COP_MVT/L{z}/{y}/{x}.pbf`,
		worldLayer: `${URL_HEADER}/TARTMS/World_MVT/L{z}/{y}/{x}.pbf`,
		worldBoundary: `${URL_HEADER}/TARTMS/World_Boundary_MVT/L{z}/{y}/{x}.pbf`,
		arirang: `${URL_HEADER}/TARTMS/Arirang_TMS/L{z}/{y}/{x}.png`,
		landAuto: `${URL_HEADER}/TARTMS/G50K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		land1m: `${URL_HEADER}TARTMS/G1M_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		land500kLayer: `${URL_HEADER}/TARTMS/G500K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		land250kLayer: `${URL_HEADER}/TARTMS/G250K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		land100kLayer: `${URL_HEADER}/TARTMS/G100K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		land50kLayer: `${URL_HEADER}/TARTMS/G50K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		aerialAuto: "",
		aerial2mLayer: "",
		aerial1mLayer: "",
		aerial500kLayer: "",
		aerial250kLayer: `${URL_HEADER}/TARTMS/G250K_HILLSHADE_TMS/{z}/{x}/{-y}.png`,
		osm: `${URL_HEADER}/TARTMS/OSM_TMS/{z}/{x}/{-y}.png`,
		mvtG25k: `${URL_HEADER}/TARTMS/FDB_G25K_MVT/L{z}/{y}/{x}.pbf`,
		mvtA250K: `${URL_HEADER}/TARTMS/FDB_A250K_MVT/L{z}/{y}/{x}.pbf`,
		mvtKR1: `${URL_HEADER}/TARTMS/FDB_KR1_MVT/L{z}/{y}/{x}.pbf`,
		mvtKR2: `${URL_HEADER}/TARTMS/FDB_KR2_MVT/L{z}/{y}/{x}.pbf`,
		mvtKR3: `${URL_HEADER}/TARTMS/FDB_KR3_MVT/L{z}/{y}/{x}.pbf`,
		mvtKR4: `${URL_HEADER}/TARTMS/FDB_KR4_MVT/L{z}/{y}/{x}.pbf`,
		mvtKR5: `${URL_HEADER}/TARTMS/FDB_KR5_MVT/L{z}/{y}/{x}.pbf`,
		rasterKR1: `${URL_HEADER}/TARTMS/KR1_TMS/L{z}/{y}/{x}.png`,
		rasterKR2: `${URL_HEADER}/TARTMS/KR2_TMS/L{z}/{y}/{x}.png`,
		rasterKR3: `${URL_HEADER}/TARTMS/KR3_TMS/L{z}/{y}/{x}.png`,
		rasterKR4: `${URL_HEADER}/TARTMS/KR4_TMS/L{z}/{y}/{x}.png`,
		rasterKR5: `${URL_HEADER}/TARTMS/KR5_TMS/L{z}/{y}/{x}.png`,
	},
	grid: {
		gars: `${URL_HEADER}/TARTMS/GRID_GARS_MVT/L{z}/{y}/{x}.pbf`,
		mgrs20: `${URL_HEADER}/TARTMS/GRID_MGRS_MVT_20KM/L{z}/{y}/{x}.pbf`,
		mgrs10: `${URL_HEADER}/TARTMS/GRID_MGRS_MVT_10KM/L{z}/{y}/{x}.pbf`,
		mgrs5: `${URL_HEADER}/TARTMS/GRID_MGRS_MVT_5KM/L{z}/{y}/{x}.pbf`,
		mgrs1: `${URL_HEADER}/TARTMS/GRID_MGRS_MVT_1KM/L{z}/{y}/{x}.pbf`,
		utm20: `${URL_HEADER}/TARTMS/GRID_UTM_MVT_20KM/L{z}/{y}/{x}.pbf`,
		utm10: `${URL_HEADER}/TARTMS/GRID_UTM_MVT_10KM/L{z}/{y}/{x}.pbf`,
		utm5: `${URL_HEADER}/TARTMS/GRID_UTM_MVT_5KM/L{z}/{y}/{x}.pbf`,
		utm1: `${URL_HEADER}/TARTMS/GRID_UTM_MVT_1KM/L{z}/{y}/{x}.pbf`,
		geographic: `${URL_HEADER}/TARTMS/GRID_Geographic_MVT/L{z}/{y}/{x}.pbf`,
		georef: `${URL_HEADER}/TARTMS/GRID_GeoRef_MVT/L{z}/{y}/{x}.pbf`,
		mgrs: `${URL_HEADER}/TARTMS/GRID_MGRS_MVT/L{z}/{y}/{x}.pbf`,
	},
	/**
	 * Digital Elevation Model로 고도 자료를 불러오기 위한 기반 데이터
	 */
	dem: `${URL_HEADER}/tilesets/srtm/`,
	/**
	 * d2 Map Server 내 각종 군대부호와 관련된 심볼에 대한 규격이 정의된 json
	 */
	d2ms: `${URL_HEADER}/D2MS/Symbol/`,
	d2ms_property: `${URL_HEADER}/D2MS/milsymbol-prop.json`,
	/**
	 * mvt 즉 벡터 데이터는 최초 생성 시 style이 없으면 보이는 것이 거의 없음.
	 * 정의된 벡터 스타일을 지도 위에 얹어줘야 각종 요소들이 보이면서 작동함
	 */
	mvtStyle: {
		worldMap: `${URL_HEADER}/MVTCONF_KJCCS/worldMap_Style.json`,
		background: `${URL_HEADER}/MVTCONF_KJCCS/worldCOP_Style.json`,
		g25K: `${URL_HEADER}/MVTCONF_KJCCS/FDB_G25K_Style.json`,
		a250k: `${URL_HEADER}/MVTCONF_KJCCS/FDB_A250K_Style.json`,
		kr1: `${URL_HEADER}/MVTCONF_KJCCS/FDB_KR1_Style.json`,
		kr2: `${URL_HEADER}/MVTCONF_KJCCS/FDB_KR2_Style.json`,
		kr3: `${URL_HEADER}/MVTCONF_KJCCS/FDB_KR3_Style.json`,
		kr4: `${URL_HEADER}/MVTCONF_KJCCS/FDB_KR4_Style.json`,
		kr5: `${URL_HEADER}/MVTCONF_KJCCS/FDB_KR5_Style.json`,
	},
	/**
	 * fdb(Feature Database, 도형 및 속성정보가 포함된 디지털지형정보로 각종 군사무기체계와 연계되는 기반공간자료) 즉, 벡터 지도 위에 올라가는 각종 요소들을 모아놓은 주소임(예를 들면 도로와 같은 선, 비행장과 같은 아이콘 등등)
	 *  */
	fdbSymbolPath: `${URL_HEADER}/MVTCONF_KJCCS/GSSSymbol/`,
	fdbLayer: {
		worldmap: `${URL_HEADER}/MVTCONF_KJCCS/worldMap_Visibility.xml`,
		background: `${URL_HEADER}/MVTCONF_KJCCS/worldCOP_Visibility.xml`,
		g25K: `${URL_HEADER}/MVTCONF_KJCCS/FDB_G25K_Visibility.xml`,
		a250k: `${URL_HEADER}/MVTCONF_KJCCS/FDB_A250K_Visibility.xml`,
		kr1: `${URL_HEADER}/MVTCONF_KJCCS/FDB_Navy_Visibility.xml`,
	},
	graphic: {
		overlay: `${URL_HEADER}/GRAPHIC/Overlay.xsd`,
	},
};
