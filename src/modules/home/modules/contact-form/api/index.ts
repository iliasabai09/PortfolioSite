import type {IPayloadForm} from "../interfaces";

export async function sendToTelegramDirect(form: IPayloadForm) {
    const BOT_TOKEN = "8523996263:AAHqYmJOcSW1zcRySftlQBb_Oe_yLDrFuI4"; // будет виден всем
    const CHAT_ID = "5000816492";

    const text =
        `📩 New message\n\n` +
        `👤 ${form.username}\n` +
        `📧 ${form.email}\n\n` +
        `💬 ${form.message}`;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    const data = await res.json();
    if (!data?.ok) throw new Error("Telegram error");
}
