<?php
namespace Craft;
// Set default timezone to UTC
date_default_timezone_set('UTC');
ini_set('log_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
ini_set('display_errors', 1);
defined('YII_DEBUG') || define('YII_DEBUG', true);
defined('YII_TRACE_LEVEL') || define('YII_TRACE_LEVEL', 3);
$craft = require '../craft/app/bootstrap.php';
echo IOHelper::deleteFile('/var/www/craft/storage/runtime/assets/sources/76.jpg') ? 'success' : 'fail';