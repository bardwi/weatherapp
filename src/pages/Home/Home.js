import React ,{ useState, useEffect, useMemo} from "react";
import Papa from "papaparse";
import { useTable, useGlobalFilter, useFilters, useSortBy, useRowSelect } from "react-table";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Navigation/Navigation";
import "./Home.css";
import Users from "../Users/Users";


const Home = ()=> {
    const [datarows, setRows] = useState([]);

    useEffect(()=> {
        Papa.parse("/state_wise_data.csv" ,{
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: data => {
              setRows(data.data);
            }
          });
        }, []);

      
       var removed = datarows.forEach(function(v, i) {
           if (v.State === 'Total') {
           datarows.push(datarows[i]);
           datarows.splice(i, 1);
         }
        })

    


    const columns = useMemo(()=> [
        { Header: "State/UT",
          Footer: "State",
          accessor: "State"
        },
        { Header: "Confirmed",
          Footer: "Confirmed",
          accessor: "Confirmed"
        },
        { Header: "Recovered",
          Footer: "Recovered",
          accessor: "Recovered"
        },
        { Header: "Deaths",
          Footer: "Deaths",
          accessor: "Deaths"
        },
        { Header: "Active",
          Footer: "Active",
          accessor: "Active"
        },
     
      ],
     []
    )

    const tableInstance = useTable({
        columns,
        data: datarows,
        
        }, useFilters, useGlobalFilter, useSortBy, useRowSelect)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        } = tableInstance
    const {globalFilter} = state;

    return(
        <div className="page-container-table">
            <Header  home/>
            <Users/>
            <div className="search-wrapper">
               <Filter filter={globalFilter}  setFilter ={setGlobalFilter}/>
            </div>
            <div className="table-container" >
                <>
                    <table {...getTableProps()} className="table-wrapper" border="1" cellspacing="4" >
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ""}
                                                </span>
                                        </th>
                                        ))}
                                </tr>
                                        ))}
                        </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()} >
                                                {row.cells.map((cell) => {
                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                })}
                                            </tr>
                                            )
                                        })}
                            </tbody>
                                   
                    </table>
                </>
            </div>
        </div>
    );
}

export default Home;