import React, {useMemo} from 'react';
import {useTable, usePagination} from 'react-table';
import {COLUMNS} from './Columns';
import './checkbox.css';

export const BasicTable = ({fires}) => {
    console.log(fires);

    const columns = useMemo(() => COLUMNS, []);

    const tableInstance = useTable({
            columns,
            data: fires,
            initialState: {pageIndex: 0}
        },
        usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        setPageSize,
        allColumns,
    } = tableInstance;

    const {pageIndex, pageSize} = state;
    return (
        <>
            <div className="columns">
                {allColumns.map((column) => (
                    <div key={column.id}>
                        <label>
                            <input type='checkbox' {...column.getToggleHiddenProps()} />
                            {column.Header}
                        </label>
                    </div>
                ))}
                <br/>
            </div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)

                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="pag">
               <span>
                   Страница{' '}
                   <strong>
                       {pageIndex + 1} of {pageOptions.length}
                   </strong>{' '}
               </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {[10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Показать {pageSize}
                        </option>
                    ))}
                </select>
                <span className="goToPage">
                   Перейти к странице: {' '}
                    <input type='number' defaultValue={pageIndex + 1}
                           onChange={e => {
                               const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                               gotoPage(pageNumber)
                           }}/>
               </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Предыдущая</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Следующая</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
};

export default BasicTable;