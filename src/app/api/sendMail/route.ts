import type {NextRequest} from "next/server";

interface Data {
  success: boolean;
  message?: string;
};

interface Web3FormsResponse {
  success: boolean;
  message: string;
};

// export default async function handler(req: NextRequest, res: NextApiResponse<Data>) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     const accessKey = process.env.ACCESS_KEY_FOR_MAILING;

//     if (!accessKey) {
//       return res.status(500).json({ success: false, message: "Access key is not defined" });
//     }

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: accessKey,
//           name,
//           email,
//           message,
//         }),
//       });

//       const data: Web3FormsResponse = await response.json();

//       if (data.success) {
//         res.status(200).json({ success: true });
//       } else {
//         res.status(400).json({ success: false, message: data.message });
//       }
//     } catch (error) {
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
// } 


export async function POST(req: Request) {
  const accessKey = process.env.ACCESS_KEY_FOR_MAILING;

  try {
    const { name, email, message } = await req.json();

    if (!accessKey) {
      return new Response(`Access key is not defined`, {
        status: 400,
      })
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
      }),
    });

    const data: Web3FormsResponse = await response.json();

    if (data.success) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, message: data.message }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}


// import { NextRequest, NextResponse } from 'next/server';

// type Web3FormsResponse = {
//   success: boolean;
//   message: string;
// };

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, message } = await req.json();

//     const accessKey = process.env.ACCESS_KEY_FOR_MAILING;

//     if (!accessKey) {
//       return NextResponse.json({ success: false, message: 'Access key is not defined' }, { status: 500 });
//     }

//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({z
//         access_key: accessKey,
//         name,
//         email,
//         message,
//       }),
//     });

//     const data: Web3FormsResponse = await response.json();

//     if (data.success) {
//       return NextResponse.json({ success: true });
//     } else {
//       return NextResponse.json({ success: false, message: data.message }, { status: 400 });
//     }
//   } catch (error) {
//     return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
//   }
// }