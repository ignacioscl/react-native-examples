import React, { useContext, useState } from 'react';

const AMBIENTE = 1;//1=DESA,2=PROD
const AppConfigProd = {
  BACKEND_URL: 'https://backend.conocegenteonline.com',
  WEB_PAGE: 'https://conocegenteonline.com.ar'
};
const AppConfigDesa = {
    BACKEND_URL: 'http://192.168.0.8:5000',
    WEB_PAGE: 'https://conocegenteonline.com.ar'
  };
const AppConfig = {
    conf:(AMBIENTE === 1 ? AppConfigDesa : AppConfigProd)
}
export default AppConfig;

export const pathImagesProfile                       = '/img/get/user_profiles/';