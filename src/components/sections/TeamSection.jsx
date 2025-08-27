import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const TeamMemberCard = ({ member, variant = 'default' }) => {
    return (
        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
                <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                </p>

                {/* Social Links */}
                {member.socialLinks && (
                    <div className="flex justify-center space-x-3">
                        {member.socialLinks.linkedin && (
                            <a
                                href={member.socialLinks.linkedin}
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} />
                            </a>
                        )}
                        {member.socialLinks.twitter && (
                            <a
                                href={member.socialLinks.twitter}
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={20} />
                            </a>
                        )}
                        {member.socialLinks.email && (
                            <a
                                href={`mailto:${member.socialLinks.email}`}
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export const TeamSection = ({
    title,
    subtitle,
    team,
    variant = 'light',
    className = ''
}) => {
    return (
        <SectionContainer
            variant={variant}
            className={className}
            id="team"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                    <TeamMemberCard
                        key={member.id}
                        member={member}
                        variant={variant}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};