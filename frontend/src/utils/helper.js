export const getSortQueryParams = (sort) => {
    const sortQueryString = Object.keys(sort).map((key) => {
        if (sort[key]) return `${key}:${sort[key]}`;
    }).join(",");
    return sortQueryString ? `&sort=${encodeURIComponent(sortQueryString)}` : "";
}

export const getPageQueryParams = (page) => {
    return `page=${page.page}&limit=${page.pageSize}`
}

export const getFilterParams = (filter) => {
    const param = Object.keys(filter).map((key,index) => {
        if (filter[key]) 
            return `${key}=${filter[key]}`;
    })
    return param.filter((value) => value).join("&");
}