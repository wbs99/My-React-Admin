import { VirtualList } from "../components/VirtualList"
import { useMeStore } from "../stores/useMeStore"
import { faker } from '@faker-js/faker';


const data = (
  Array(100000).fill(0).map((_, i) => ({ key: i, text: faker.lorem.paragraph() }))
)
export const DashboardPage = () => {
  const { me } = useMeStore()
  return (
    <>
      <div>DashboardPage </div>
      <div>{me.email}</div>
      <VirtualList list={data} />
    </>
  )
}
export default DashboardPage