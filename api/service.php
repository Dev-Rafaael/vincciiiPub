<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Verificar conexão
$servername = "localhost";
$username = "vincciBD";
$password = "v*incci***P*u**B2024";
$dbname = "vinccipub";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Conexão falhou: " . $conn->connect_error]);
    exit();
}

// Decodificar o JSON recebido
$data = json_decode(file_get_contents("php://input"), true);

if ($data && isset($data['cpf'], $data['nomeCompleto'], $data['email'], $data['sexo'], $data['telefone'], $data['dataNascimento'])) {
    $cpf = $data['cpf'];
    $nomeCompleto = $data['nomeCompleto'];
    $email = $data['email'];
    $sexo = $data['sexo'];
    $telefone = $data['telefone'];
    $dataNascimento = $data['dataNascimento'];

    $sql = "INSERT INTO users (cpf, nomeCompleto, email, senha, sexo, telefone, dataNascimento) VALUES ('$cpf', '$nomeCompleto', '$email', '$senha', '$sexo', '$telefone', '$dataNascimento')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Dados salvos com sucesso."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao salvar dados: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Dados inválidos."]);
}

$conn->close();
?>
