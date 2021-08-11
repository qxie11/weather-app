const parseCityListData = (data) => {
    return JSON.parse(data.replace('jQuery19101845054907385475_1628680351123(', '').slice(0, -1)).list;
}