import { useMeStore } from "../stores/useMeStore"

type Props = {

}
export const DashboardPage = (props: Props) => {
  const { me } = useMeStore()
  return (
    <>
      <div>DashboardPage </div>
      <div>{me.email}</div>
    </>
  )
}