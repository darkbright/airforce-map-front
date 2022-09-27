import { Dialog, Divider, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ReportStyleTextBox from "../../box/textBox/ReportStyleTextBox";
import StatusChip from "../../chip/StatusChip";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";

interface ReportModalExmapleProps {
	open: boolean;
	setOpen: (value: boolean) => void;
}

const ReportModalExample = ({ open, setOpen }: ReportModalExmapleProps) => {
	return (
		<Dialog maxWidth="md" open={open} fullWidth onClose={setOpen}>
			<Root>
				<Typography variant="h6" sx={{ textAlign: "center" }}>
					정보통신 장애 보고
				</Typography>
				<Divider sx={{ mb: 4, mt: 4 }} />
				<FlexBox>
					<ReportStyleTextBox title="부대">공군본부</ReportStyleTextBox>
					<ReportStyleTextBox title="관련업무">정보통신망(AFCCS)</ReportStyleTextBox>
					<ReportStyleTextBox title="피해발생일시">2022-09-03 12:00:00</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="피해시설유형">(통신시설) 무선중계소</ReportStyleTextBox>
					<ReportStyleTextBox title="피해시설코드"> - </ReportStyleTextBox>
					<ReportStyleTextBox title="피해위치좌표">51SWU2591488333</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="피해시설명"> 어딜까요 </ReportStyleTextBox>
					<ReportStyleTextBox title="피해지역명">피해지역</ReportStyleTextBox>
					<ReportStyleTextBox title="피해부대명"> 어딜까요 </ReportStyleTextBox>
				</FlexBox>
				<Divider sx={{ mb: 4, mt: 4 }} />
				<FlexBox>
					<ReportStyleTextBox title="피해원인">적 포병사격</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="피해구간">피해구간</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="피해내용">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quidem quo facilis
						sit? Enim, impedit obcaecati? Officiis quae corporis a, sed magnam dolores ex quisquam
						dolor facere minima incidunt?
					</ReportStyleTextBox>
				</FlexBox>
				<Divider sx={{ mb: 2, mt: 6, borderWidth: 1.2 }} />
				<FlexBox>
					<ReportStyleTextBox title="조치사항">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quidem quo facilis
						sit? Enim, impedit obcaecati? Officiis quae corporis a, sed magnam dolores ex quisquam
						dolor facere minima incidunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Minus dicta quidem quo facilis sit? Enim, impedit obcaecati? Officiis quae corporis a,
						sed magnam dolores ex quisquam dolor facere minima incidunt?
					</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="복구예정일시">2019-09-04 12:00:00</ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="복구완료일시"> - </ReportStyleTextBox>
				</FlexBox>
				<FlexBox>
					<ReportStyleTextBox title="복구구분">
						<StatusChip severity="inProgress" />
					</ReportStyleTextBox>
				</FlexBox>
				<Divider sx={{ mb: 4, mt: 4 }} />
				<FlexBox>
					<ReportStyleTextBox title="비고"> - </ReportStyleTextBox>
				</FlexBox>
				<Divider sx={{ mb: 4, mt: 4 }} />
				<FlexBox>
					<ReportStyleTextBox title="첨부파일">
						<Link to="/files/sample.hwp" target="_blank" download>
							<FlexBox>
								<AttachmentOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
								정보통신현황.hwp
							</FlexBox>
						</Link>{" "}
					</ReportStyleTextBox>
				</FlexBox>
			</Root>
		</Dialog>
	);
};

export default ReportModalExample;

const Root = styled("div")(({ theme }) => ({
	margin: "3%",
	padding: 16,
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 6,
	background: theme.palette.table,
}));

const FlexBox = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	marginTop: 6,
	marginBottom: 12,
}));
