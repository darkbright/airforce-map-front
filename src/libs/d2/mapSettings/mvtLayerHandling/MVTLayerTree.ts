import D2MapModule from "../../D2MapModule";
import urlInfo from "../urlInfo";

const { MVTLayerUI } = D2MapModule;

const MVTLayerTreeUI = new MVTLayerUI("d2map_mvtTree");

/**
 * MVT 레이어인 경우, 개별 요소들(휴전선, 철도, 도로 등등)을 토글하여 보여줄 수 있게 설계되어 있어 이 부분에 대한 초기 세팅을 해주는 작업임.
 * 해당 레이어의 요소들은 전역으로 박혀있고, 리액트가 아닌 제이쿼리로 되어 있어 상태 관리가 불가.
 * 따라서 UI에 입힐 시 리액트 적인 요소를 반영할 수 없음.
 */
export const loadMVTLayerTree = async () => {
	const selected = await window.mapLayerManager?.getMVTLayer("COPMap");

	MVTLayerTreeUI.setMVTLayer(selected);
	MVTLayerTreeUI.importXMLFromUrl(urlInfo.fdbLayer.background);

	MVTLayerTreeUI.mvtLayer.visibleLayer._source.background = true;
};
