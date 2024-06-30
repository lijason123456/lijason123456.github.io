<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 这里可以将用户名和密码与数据库中的数据进行比对
    // 如果匹配成功，就可以将用户重定向到另一个页面
    if ($username === 'lijason' && $password === 'lijason123456') {
        header('Location: welcome.php');
        exit;
    } else {
        echo '用户名或密码错误';
    }
}
?>