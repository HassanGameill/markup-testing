import Image from "next/image";

import Link from "next/link";

type TCommentData = {
  name: string;
  position: string;
  text: string;
  photoLink: any;
  tweetLink: any;

}


export const NewsUsCard = ({ name, position, text, photoLink, tweetLink }: TCommentData) => {
    return (
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-200 group-hover:opacity-100 group-hover:duration-200" />
        <Link href="/" className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          
            <div className="">
              <Image
              src={photoLink}
              className="bg-center bg-cover"
                alt=""
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Ahmed
                </h3>
                <p className="text-gray-500 text-md">{position}</p>
              </div>
            </div>
            
          </div>
        </Link>
      </div>
    );
  };