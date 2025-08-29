import { Linkedin, Mail, Quote, Twitter, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const TeamMemberCardCard = ({
    member
}) => {
    return (
        <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
                width={284}
                height={338}
                src={member.avatar}
                alt={member.name}
                className="w-full h-auto object-center"
            />
            <div className="px-8 py-9 space-y-2">
                <h3 className="text-xl md:text-3xl border-b-2 border-[var(--tertiary)] pb-2">
                    {member.name}
                </h3>
                <p className="text-sm font-bold text-[var(--tertiary)]">
                    {member.role}
                </p>
                {
                    member.socialLinks && (
                        <div className="flex items-center space-x-3">
                            {member.socialLinks.linkedin && (
                                <a
                                    href={member.socialLinks.linkedin}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={17} />
                                </a>
                            )}
                            {member.socialLinks.twitter && (
                                <a
                                    href={member.socialLinks.twitter}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter size={17} />
                                </a>
                            )}
                            {member.socialLinks.email && (
                                <a
                                    href={`mailto:${member.socialLinks.email}`}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                    <Mail size={17} />
                                </a>
                            )}

                            {member.socialLinks.email && (
                                <a
                                    href={`mailto:${member.socialLinks.email}`}
                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                    <TwitterIcon size={20} />
                                </a>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    );
};