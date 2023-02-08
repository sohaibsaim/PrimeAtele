import axios from "axios";

const { useEffect, useState } = require("react");
const { useParams } = require("react-router-dom")

function ProfileView() {
    const {id} = useParams();
    const [customer,setCustomer] = useState({});
    const getProfile = async ()=>{
        
    }
    useEffect(()=>{},[]);
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white p-0">
                <div class="container-fluid">

                    <header class="top">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="logo d-flex align-items-center">
                                            <label class="plus" id="sidebarToggle">+</label>
                                            <h2>Edit Customer</h2>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </nav>
            <div class="content pl-4 pr-4 pt-1">
                <section class="SingUp pt-0">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="wrapper">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Customer Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone no" />
                                    </div>
                                    <div class="form-group">
                                        <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone no">

                                        </textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Todays Pickup" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="remaining meals" />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Save Changes</button>

                                </form>
                                <div class="make_Entry">
                                    <label>
                                        Todays Pickup
                                    </label>
                                    <button type="submit" class="btn btn-primary">Make Entry</button>
                                </div>
                                <div class="previous_pickups">
                                    <label>
                                        Previous Pickups
                                    </label>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12">
                                            <div class="card_">
                                                <div class="left">
                                                    <div class="circle">
                                                    </div>
                                                    <div class="line">

                                                    </div>
                                                    <div class="circle">
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <label>Meal Taken </label>
                                                    <div class="d-flex align-items-center">
                                                        <p class="w-140">3</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                    <label>Time of Pickup </label>
                                                    <div class="d-flex align-items-center">
                                                        <p>10:00 AM | Monday June 23, 2023</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12">
                                            <div class="card_">
                                                <div class="left">
                                                    <div class="circle">
                                                    </div>
                                                    <div class="line">

                                                    </div>
                                                    <div class="circle">
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <label>Meal Taken </label>
                                                    <div class="d-flex align-items-center">
                                                        <p class="w-140">3</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                    <label>Time of Pickup </label>
                                                    <div class="d-flex align-items-center">
                                                        <p>10:00 AM | Monday June 23, 2023</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12">
                                            <div class="card_">
                                                <div class="left">
                                                    <div class="circle">
                                                    </div>
                                                    <div class="line">

                                                    </div>
                                                    <div class="circle">
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <label>Meal Taken </label>
                                                    <div class="d-flex align-items-center">
                                                        <p class="w-140">3</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                    <label>Time of Pickup </label>
                                                    <div class="d-flex align-items-center">
                                                        <p>10:00 AM | Monday June 23, 2023</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12">
                                            <div class="card_">
                                                <div class="left">
                                                    <div class="circle">
                                                    </div>
                                                    <div class="line">

                                                    </div>
                                                    <div class="circle">
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <label>Meal Taken </label>
                                                    <div class="d-flex align-items-center">
                                                        <p class="w-140">3</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                    <label>Time of Pickup </label>
                                                    <div class="d-flex align-items-center">
                                                        <p>10:00 AM | Monday June 23, 2023</p>
                                                        <i class="fas fa-pen"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProfileView;