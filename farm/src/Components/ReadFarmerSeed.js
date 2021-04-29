import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSeed, moveToStorage } from "../Redux/actions/actions";

export default function ReadFarmerSeed({ seed, farmerId }) {
  const { CropIcon, name, id } = seed;
  const dispatch = useDispatch();

  const harvestCrop = () => {
    // 곳간으로 복사 작업 후 삭제
    dispatch(moveToStorage(CropIcon, id, name));
    dispatch(deleteSeed(farmerId, id));
  };
  return (
    <div className="Seed_In_Farmer">
      <div className="Crop_Icon_In_Farmer">{CropIcon}</div>
      <div>{name}</div>
      <button className="Complete_Btn" onClick={harvestCrop}>
        수확하기
      </button>
    </div>
  );
}
