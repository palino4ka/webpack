import Post from "@models/Post";
import json from './assets/json/json';
import webpackLogo from './assets/images/logo';
import './babel';
import './assets/styles/main'

const post = new Post('webpack title', webpackLogo);
console.log('Post to string: ', post.toString());
console.log('JSON: ', json);