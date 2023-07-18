import React, { useContext, useState } from 'react';

const AMBIENTE = 1;//1=DESA,2=PROD
const AppConfigProd = {
  BACKEND_URL: 'https://localhost'
};
const AppConfigDesa = {
    BACKEND_URL: 'http://192.168.0.65:5000'
  };
const AppConfig = {
    conf:(AMBIENTE === 1 ? AppConfigDesa : AppConfigProd)
}
export default AppConfig;

export const pathImagesProfile                       = '/img/get/user_profiles/';