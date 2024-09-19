import { FaChevronUp } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const data = [{
  position: 1,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 2,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 3,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 4,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 5,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 6,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 7,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 8,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 9,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 10,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 11,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 12,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 13,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 14,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 15,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
  {
  position: 16,
  username: 'gnu/uguu',
  total_points: 69,
  record: '9-0',
  dif_pts: 3,
  tb: 0},
] //Dados de teste 

export default function TabelaRodada() {
  return (
    <Table className="uppercase font-lemonmilk w-full">
      <TableHeader>
        <TableRow className="text-center text-lg text-white">
          <TableHead>Pos</TableHead>
          <TableHead className="text-left">Nome</TableHead>
          <TableHead>PTS</TableHead>
          <TableHead>Record</TableHead>
          <TableHead className="text-center">Dif. Pts</TableHead>
          <TableHead>TB</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.slice(0,8).map((val) => (
          <TableRow key={val.username} className="text-center text-lg border-4">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.position}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
            <TableCell className="text-textPurple bg-white/70 h-[3rem] w-[5rem] border-4 border-black/100 hover:bg-white/50">{val.record}</TableCell>
            <TableCell className="bg-textPurple/70 h-[3rem] w-[7rem] border-4 border-black/100 hover:bg-textPurple/50">{val.dif_pts}</TableCell>
            <TableCell className="text-textPurple bg-white/70 size-[3rem] border-4 border-black/100 hover:bg-white/50">{val.tb}</TableCell>
          </TableRow>
        ))}
        <TableRow className="text-center text-lg border-4">
          <TableCell colSpan={6} className="text-center text-lg border-4 border-black/100 text-neutral-400">
            <div className="flex flex-row align-center text-center items-center justify-center">
              <FaChevronUp/>&nbsp;PASSAM PARA A PRÓXIMA FASE&nbsp;<FaChevronUp/>
            </div>
          </TableCell>
        </TableRow>
        {data.slice(8,data.length).map((val) => (
          <TableRow key={val.username} className="text-center text-lg border-4 border-black/100">
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.position}</TableCell>
            <TableCell className="text-left text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50">{val.username}</TableCell>
            <TableCell className="bg-textPurple/70 size-[3rem] border-4 border-black/100 hover:bg-textPurple/50">{val.total_points}</TableCell>
            <TableCell className="text-textPurple bg-white/70 h-[3rem] w-[5rem] border-4 border-black/100 hover:bg-white/50">{val.record}</TableCell>
            <TableCell className="bg-textPurple/70 h-[3rem] w-[7rem] border-4 border-black/100 hover:bg-textPurple/50">{val.dif_pts}</TableCell>
            <TableCell className="text-textPurple bg-white/70 size-[3rem] border-4 border-black/100 hover:bg-white/50">{val.tb}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}