import BaseModal from "../../components/modal/BaseModal";

interface MapScaleBarOptionModalProps {
	open: boolean;
	setOpen: () => void;
}

const MapScaleBarOptionModal = ({ open, setOpen }: MapScaleBarOptionModalProps) => {
	return (
		<BaseModal open={open} setOpen={setOpen}>
			<div id="sidemenu-coordinate">
				<ul>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-scale" checked />
						<label htmlFor="d2map_coord-sub-scale">Scale</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-geographic" checked />
						<label htmlFor="d2map_coord-sub-geographic">Geographic (Degree)</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-geographic-dms" />
						<label htmlFor="d2map_coord-sub-geographic-dms">Geographic (DMS)</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-utm" />
						<label htmlFor="d2map_coord-sub-utm">UTM</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-mgrs" checked />
						<label htmlFor="d2map_coord-sub-mgrs">MGRS</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-georef" />
						<label htmlFor="d2map_coord-sub-georef">GeoRef</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-gars" />
						<label htmlFor="d2map_coord-sub-gars">GARS</label>
					</li>
					<li>
						<input type="checkbox" name="d2map_coord-sub" id="d2map_coord-sub-elevation" />
						<label htmlFor="d2map_coord-sub-elevation">Elevation</label>
					</li>
				</ul>
			</div>
		</BaseModal>
	);
};

export default MapScaleBarOptionModal;
