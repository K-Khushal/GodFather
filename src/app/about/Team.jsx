import {team_details} from "@/constants/team";

export default function Team() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center pb-4">
                    <h2 className="text-4xl font-semibold tracking-wide">Meet our team!</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {team_details.map((teamMember, index) => (
                        <div key={index} className="p-6 rounded-lg flex flex-col items-center">
                            <img
                                alt={teamMember.name}
                                className="rounded-full mb-4"
                                height="228"
                                src={teamMember.image}
                                style={{
                                    aspectRatio: "128/128",
                                    objectFit: "cover",
                                }}
                                width="288"
                            />
                            <h3 className="text-2xl font-medium">{teamMember.name}</h3>
                            <p className="text-xl text-gray-600 pt-1">{teamMember.position}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

