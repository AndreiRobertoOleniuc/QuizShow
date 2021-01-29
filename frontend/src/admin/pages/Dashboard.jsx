//Imports mit Icons
import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as RiIcons from "react-icons/ri";
import * as AIIcons from "react-icons/ai";

export default function Dashboard({ userName, password }) {
    //Anzeige
    return (
        <div className="content">
            <div className="plate">
                <div className="dashBoardTitle">
                    <div className="title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="content">
                </div>
            </div>
        </div>
    )
}