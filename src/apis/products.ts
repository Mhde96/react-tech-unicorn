import { endpoints } from "../constant/endpoints"
import { api } from "../helper/api"
import { useQuery } from 'react-query'
import { productType } from "../types/product-type"


type useProductApiType ={
    data: Array<productType>
}
export const useProductApi = (): useProductApiType => {
    const fetchData = () => api.get(endpoints.getAll)
    const { data } = useQuery(endpoints.getAll, fetchData)
    return { data: data?.data }

}