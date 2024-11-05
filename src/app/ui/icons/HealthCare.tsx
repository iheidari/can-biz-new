import React from "react";
import Svg from "./Svg";

const HealthCare = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg {...props}>
      <path d="m24,6v10.101c0,2.137-.832,4.146-2.343,5.657l-1.95,1.95c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.95-1.95c1.133-1.133,1.757-2.64,1.757-4.243V6c0-.551-.449-1-1-1s-1,.449-1,1c0,0-.012,8.043-.013,8.067-.015.662-.239,1.32-.688,1.856l-2.578,2.684c-.196.205-.458.307-.721.307-.25,0-.499-.093-.693-.279-.398-.383-.411-1.016-.028-1.414l2.533-2.634c.13-.157.191-.368.188-.585,0,0,0-.001,0-.002v-.044c-.013-.221-.095-.446-.254-.624-.367-.409-.998-.444-1.406-.077l-3.163,2.911c.53,1.001.824,2.124.824,3.276v3.559c0,.552-.448,1-1,1s-1-.448-1-1v-3.559c0-1.395-.588-2.735-1.615-3.68l-2.734-2.516c-.398-.357-1.03-.324-1.397.086-.328.367-.337.928-.021,1.305l2.57,2.671c.383.398.371,1.031-.028,1.414-.396.383-1.031.372-1.414-.028l-2.616-2.721c-.46-.547-.693-1.2-.723-1.854-.005-.04-.024-8.118-.024-8.118,0-.551-.449-1-1-1s-1,.449-1,1v10.101c0,1.603.624,3.109,1.757,4.243l1.95,1.95c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.95-1.95c-1.511-1.511-2.343-3.52-2.343-5.657V6c0-1.654,1.346-3,3-3s3,1.346,3,3v5.186c.999-.352,2.152-.176,2.996.579l2.744,2.525c.087.08.164.168.247.252l3.008-2.768c.851-.762,2.006-.939,3.005-.587v-5.186c0-1.654,1.346-3,3-3s3,1.346,3,3ZM7,3.2c0-1.765,1.346-3.2,3-3.2.782,0,1.477.27,2,.727.523-.457,1.218-.727,2-.727,1.654,0,3,1.436,3,3.2,0,2.004-2.042,4.064-3.754,5.438-.361.29-.803.435-1.246.435s-.885-.145-1.247-.436c-1.712-1.374-3.753-3.434-3.753-5.438Zm2,0c0,.904,1.152,2.391,3.006,3.879,1.842-1.488,2.994-2.975,2.994-3.879,0-.662-.449-1.2-1-1.2-.461,0-1,.262-1,1,0,.552-.448,1-1,1s-1-.448-1-1c0-.738-.539-1-1-1-.551,0-1,.539-1,1.2Z" />
    </Svg>
  );
};

export default HealthCare;
