<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite solicitações de qualquer origem

$host = 'localhost';
$dbname = 'vinccipub';
$user = 'vincciBD';
$pass = 'v*incci***P*u**B2024';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = isset($_GET['search']) ? $_GET['search'] : '';
    $stmt = $pdo->prepare('SELECT * FROM pacotes WHERE title LIKE :query');
    $stmt->execute(['query' => "%$query%"]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
