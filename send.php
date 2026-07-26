<?php
header('Content-Type: application/json; charset=utf-8');

$allowedOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($allowedOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
    exit;
}

$recipient = 'hsm@rudn.ru';
$subject = 'Заявка с сайта Магистратура «Туризм» ВШУ';

function clean_field(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return $value;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = clean_field($data['name'] ?? '');
$phone = clean_field($data['phone'] ?? '');
$email = clean_field($data['email'] ?? '');
$profile = clean_field($data['profile'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'validation', 'message' => 'Укажите ФИО и телефон']);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'validation', 'message' => 'Некорректный email']);
    exit;
}

$bodyLines = [
    'Новая заявка с сайта «Магистратура «Туризм» ВШУ»',
    '',
    'ФИО: ' . $name,
    'Телефон: ' . $phone,
    'Email: ' . ($email !== '' ? $email : '—'),
    'Интересующий профиль: ' . ($profile !== '' ? $profile : '—'),
    '',
    'Дата заявки: ' . date('d.m.Y H:i'),
];
$body = implode("\n", $bodyLines);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: ' . 'Сайт Магистратура «Туризм» <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'rudn.ru') . '>';
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$success = mail($recipient, $encodedSubject, $body, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'mail_failed', 'message' => 'Не удалось отправить письмо']);
}
