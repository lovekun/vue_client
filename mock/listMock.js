import Mock from 'mockjs';

export default Mock.mock(baseURL + 'getList', {
    'data': [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
    },
    {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
    }
    ]
});