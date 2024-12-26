import Link from "next/link";
import React, { FC } from "react";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

interface SocialMediaProps {
  links: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const SocialMedia: FC<SocialMediaProps> = ({ links }) => {
  const { twitter, linkedin, github } = links;

  return (
    <div className='flex justify-center gap-4'>
      {twitter && (
        <Link href={twitter} target='_blank' rel='noopener noreferrer'>
          <TiSocialTwitter className='text-4xl text-blue-500 hover:text-blue-700 transition-colors duration-300' />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target='_blank' rel='noopener noreferrer'>
          <TiSocialLinkedin className='text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300' />
        </Link>
      )}
      {github && (
        <Link href={github} target='_blank' rel='noopener noreferrer'>
          <FaGithub className='text-4xl text-gray-800 hover:text-gray-900 transition-colors duration-300' />
        </Link>
      )}
    </div>
  );
};

export default SocialMedia;
