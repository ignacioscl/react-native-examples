import React, { useContext, useState } from 'react';

const AMBIENTE = 1;//1=DESA,2=PROD
const PAGE_SIZE = 25;
const AppConfigProd = {
  BACKEND_URL: 'https://backend.conocegenteonline.com',
  WEB_PAGE: 'https://conocegenteonline.com.ar',
  PAGE_SIZE: PAGE_SIZE
};
const AppConfigDesa = {
    BACKEND_URL: 'http://192.168.0.8:5000',
    WEB_PAGE: 'https://conocegenteonline.com.ar',
    PAGE_SIZE: PAGE_SIZE
  };
const AppConfig = {
    conf:(AMBIENTE === 1 ? AppConfigDesa : AppConfigProd)
}
export const AppSetting = {
  PAGE_SIZE,
  thumbnail:'/img/get/-1/-1/foto-perfil.jpg',
  pathImagesProfile: '/img/get/user_profiles/',
  pathProfileImages: "/img/get/user_profiles/{id}/{image}"
}
export default AppConfig;

               