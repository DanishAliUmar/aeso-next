import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { TeamMemberCardCard } from '../../common/TeamMemberCard';

export const TeamSection = ({
    team
}) => {
    return (
        <SectionContainer
            className={"!bg-[#F3F4FA]"}
            id="teams"
        >
            <section className="space-y-10">
                <div className="space-y-4 pb-10">
                    <p className="text-xl md:text-2xl font-bold text-[var(--tertiary)]">Our Experts</p>
                    <h2 className="text-3xl md:text-5xl">Meet the Team</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {team.map((member
                    ) => (
                        <TeamMemberCardCard
                            key={member.id}
                            member={member}
                        />
                    ))}
                </div>
            </section>
        </SectionContainer>
    );
};
