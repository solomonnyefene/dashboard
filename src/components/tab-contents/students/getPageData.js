
import paginate from './paginate'
export function getPageData(data, currentPage, pageSize){
    const paginationData = paginate(data, currentPage, pageSize);
    console.log('DATAAAAAA', paginationData)
    return { totalCount: data.length, list: paginationData }
 }

 export default getPageData