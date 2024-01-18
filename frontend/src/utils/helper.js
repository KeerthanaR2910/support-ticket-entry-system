export const getSortQueryParam = (sort) => {
    const sortQueryString = Object.keys(sort).map((key) => {
        if (sort[key]) return `${key}:${sort[key]}`;
    }).join(",");
    return `sort=${encodeURIComponent(sortQueryString)}` ?? "";
}

export const getPageQueryParams = (page) => {
    return `page=${page.page}&limit=${page.pageSize}`
}