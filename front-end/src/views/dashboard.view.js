import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardView() {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);
    const getData = async () => {
        var token = localStorage.getItem("token");
        var result = await axios({ url: "http://localhost:8000/api/admin/all-customers", method: "GET", headers: { "Authorization": token } });
        if (result.data.status == 401) return navigate("/login");
        if (result.data.status == 200) {
            setData(result.data.data);
        } else {
            alert(result.data.message);
        }
    }
    useEffect(() => {
        var token = localStorage.getItem("token");
        if (!token) navigate("/login");
        else {
            setToken(token);
            getData();
        }
    }, []);
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
            <div className="container-fluid">

                <header className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="logo d-flex align-items-center">
                                        <label className="plus" id="sidebarToggle">+</label>
                                        <h2>Dashboard</h2>
                                    </div>
                                    <div className="">
                                        <a href=""><i className="fa fa-user mr-2" aria-hidden="true"></i>Export Excel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </nav>
        <div className="content pl-4 pr-4 pt-1">
            <form>
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control mb-3" placeholder="Search Customers" />
                    <div className="custom_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Phone number
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Current Remaining Meals
                                    </th>
                                    <th>
                                        last Pickup
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length > 0 && data.map((e, i) => {
                                        return <tr>
                                            <td> {e.id}</td>
                                            <td>{e.name}</td>
                                            <td> {e.phone}</td>
                                            <td> {e.email} </td>
                                            <td> {e.todaysPickup}</td>
                                            <td>{e.meals} meals grabbed</td>
                                            <td><button className="btn">View Profile</button>  </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    </>);
}
export default DashboardView;