import React from "react";
import axios from "axios";
import { following, for_you, reveal } from "../config/config";
import { RESPONSE_CODES } from "../utils/responseCodes";

export const For_you_list = async () => {
    var config = {
        method: 'GET',
        url: for_you,
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios(config)
    if (response.status === RESPONSE_CODES.SUCCESS) {
        return response
    }
}

export const Following_list = async () => {
    var config = {
        method: 'get',
        url: following,
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios(config)
    if (response.status === RESPONSE_CODES.SUCCESS) {
        return response
    } else {

    }

}

export const Reveal_list = async (queId) => {
    console.log("==", queId)
    var config = {
        method: 'get',
        url: reveal + "?id=" + queId,
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios(config)
    return response.data

}