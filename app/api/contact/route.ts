import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, subject, message } = body

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: '必須項目を入力してください。' }, { status: 400 })
    }

    // 配置邮件传输器
    // 注意：需要在环境变量中配置SMTP信息
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // 发送邮件的邮箱
        pass: process.env.SMTP_PASSWORD, // 邮箱密码或应用专用密码
      },
    })

    // 邮件内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // 接收邮件的邮箱
      subject: `【お問い合わせ】${subject} - ${name}様`,
      html: `
        <h2>お問い合わせフォームからのメール</h2>
        <div style="line-height: 1.8;">
          <p><strong>お名前：</strong>${name}</p>
          <p><strong>メールアドレス：</strong>${email}</p>
          <p><strong>会社名：</strong>${company || '未入力'}</p>
          <p><strong>電話番号：</strong>${phone || '未入力'}</p>
          <p><strong>件名：</strong>${subject}</p>
          <p><strong>お問い合わせ内容：</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
      replyTo: email,
    }

    // 发送邮件
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'メールを送信しました。' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。もう一度お試しください。' },
      { status: 500 },
    )
  }
}

