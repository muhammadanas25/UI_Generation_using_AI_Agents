
import Image from "next/image";
import Link from "next/link";
import { Trophy, Medal, ArrowUp, ArrowDown, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const countryFlags = {
  Argentina: "https://flagcdn.com/ar.svg",
  France: "https://flagcdn.com/fr.svg",
  Croatia: "https://flagcdn.com/hr.svg",
  Hungary: "https://flagcdn.com/hu.svg"
};

export default function TopPerformers() {
  const performers = [{
    name: "Lionel Messi",
    country: "Argentina",
    position: "Forward",
    goals: 3,
    assists: 1,
    image: "https://bfldeliverysc.blob.core.windows.net/results/154b49921979489aaf68b2d30086c508/sample.jpeg?se=2024-11-11T17%3A22%3A15Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=bv5XyVGk%2BGa75B/UmKmsa4vknqkWx2%2Bi8%2BK2PiQYPLw%3D",
    rankChange: 1,
    alt: "The image depicts Lionel Messi, an iconic Argentine footballer known for his exceptional skills and achievements in the sport. In the image, he is likely seen in his national team jersey, featuring the colors of Argentina, which is predominantly light blue and white. Messi's expression is focused and determined, reflecting his competitive spirit as a forward. As one of the top performers in the FIFA World Cup, he is recognized for scoring 3 goals and providing 1 assist in the tournament. His ranking has improved by 1 position, indicating his continued excellence on the field. The background of the image may feature elements of a football stadium or a dynamic sports environment, further emphasizing his status as a leading athlete."
  }, {
    name: "Kylian Mbappé",
    country: "France",
    position: "Forward",
    goals: 3,
    assists: 2,
    image: "https://bfldeliverysc.blob.core.windows.net/results/c69960887a6e4a63ad5ad4f0647b55df/sample.jpeg?se=2024-11-11T17%3A22%3A19Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=VGIhYeZe7RqkFeLET%2B95brd5EeotKdr/ELUNYAEWPio%3D",
    rankChange: 0,
    alt: "The image features Kylian Mbapp\xE9, a prominent French football player known for his speed and skill on the field. He is depicted in his national team jersey, which is predominantly blue with accents of red and white, reflecting the colors of the French flag. Mbapp\xE9 has a focused expression, showcasing his determination and competitive spirit. His short, dark hair is styled neatly, and he has a youthful appearance that embodies the energy of a forward player. The background of the image is likely blurred to emphasize his presence as a key athlete in the FIFA World Cup context."
  }, {
    name: "Julian Alvarez",
    country: "Argentina",
    position: "Forward",
    goals: 4,
    assists: 1,
    image: "https://bfldeliverysc.blob.core.windows.net/results/af6a24757a4347ef993d1379010dc6ea/sample.jpeg?se=2024-11-11T17%3A22%3A24Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=tAzy4hj/oza/UfUE65VXY0fejtj3yncc5IiU1wZ0d5Y%3D",
    rankChange: 2,
    alt: "The image features Julian Alvarez, an Argentine forward known for his dynamic playing style on the field. He has a youthful appearance, with short dark hair and a determined expression that reflects his competitive spirit. Alvarez is depicted in his national team jersey, which is predominantly white with blue stripes, symbolizing his pride in representing Argentina. The background is likely to be a subtle gradient or blurred stadium scene, emphasizing his role as a key player in the FIFA World Cup. His energetic demeanor and athletic build underscore his impressive performance, having scored 4 goals and provided 1 assist, contributing to his rise in rank during the tournament."
  }, {
    name: "Emiliano Martinez",
    country: "Argentina",
    position: "Goalkeeper",
    goals: 0,
    assists: 0,
    image: "https://bfldeliverysc.blob.core.windows.net/results/cf3cdbd9a8dc44b284243623c27c9c18/sample.jpeg?se=2024-11-11T17%3A22%3A29Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=ZmCpsIpmYJ6UHaTmJFBCx0HeEMbUTsk2uvpp3P6XRpQ%3D",
    rankChange: 3,
    alt: "The image depicts Emiliano Martinez, an Argentine goalkeeper known for his remarkable performances on the field. He has a focused expression, embodying the determination and resilience characteristic of a top athlete. Martinez is wearing a goalkeeper's uniform, which typically consists of a jersey and shorts in the colors of the Argentina national team. His hair is styled neatly, and he has a slight smile that reflects confidence. The background of the image is blurred, drawing attention to him as the main subject. The lighting is bright, enhancing his features and the vibrant colors of his uniform."
  }, {
    name: "Luka Modric",
    country: "Croatia",
    position: "Midfielder",
    goals: 1,
    assists: 2,
    image: "https://bfldeliverysc.blob.core.windows.net/results/6f6c5d5a4f6b4d9a81d633606b28e780/sample.jpeg?se=2024-11-11T17%3A22%3A35Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=2KlImSQLs3MFdBCLpEFQb1jJojdIrRTsSynLIAPZqqU%3D",
    rankChange: -1,
    alt: "The image features Luka Modric, a professional footballer from Croatia, known for his role as a midfielder. He has a distinguished appearance, characterized by his medium-length dark hair and a focused expression, reflecting his competitive nature on the field. Modric is often seen wearing the national team's kit, which prominently displays the red and white checkered pattern of Croatia, symbolizing his national pride. In the context of the FIFA World Cup, the image captures him in action, likely during a match, showcasing his skills and determination as he contributes to the game. His performance statistics indicate he scored 1 goal and provided 2 assists, while his rank has changed negatively by 1 position, suggesting a slight decline in his performance relative to other players."
  }, {
    name: "Antoine Griezmann",
    country: "France",
    position: "Forward",
    goals: 1,
    assists: 2,
    image: "https://bfldeliverysc.blob.core.windows.net/results/ee174a55d80b4721a1123275ab1849dd/sample.jpeg?se=2024-11-11T17%3A22%3A40Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=5N8Ei5%2BtzTnDT4av2ClYl4ehJ7ph1Z0A6kLzYrqkrus%3D",
    rankChange: 1,
    alt: "The image features Antoine Griezmann, a professional football player from France, depicted in his team jersey. Griezmann is a forward known for his agility and skill on the field. He has a confident expression, showcasing his determination and competitive spirit. The background of the image is likely a football pitch or a stadium, emphasizing his role as an athlete. His iconic hairstyle and facial features are clearly visible, making it easy to recognize him as one of the top performers in football."
  }, {
    name: "Nicolas Otamendi",
    country: "Argentina",
    position: "Defender",
    goals: 0,
    assists: 0,
    image: "https://bfldeliverysc.blob.core.windows.net/results/55c3daa5c33f413c8ed815ed0bdea2ba/sample.jpeg?se=2024-11-11T17%3A22%3A46Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=f9voLHOKFgvGkSC4QlZv%2B6W/iiRhwcFC4ccLBT%2B43xg%3D",
    rankChange: 2,
    alt: "The image depicts Nicolas Otamendi, an Argentine professional footballer. He is shown in his national team kit, which features the traditional light blue and white stripes of Argentina. Otamendi has a focused expression, reflecting determination and commitment to the game. His short black hair is neatly styled, and he has a well-groomed beard. The background of the image is likely a football pitch or a stadium, emphasizing his role as a defender. Given his statistics, the image captures him in a moment of readiness, highlighting his position and importance to the team, despite not having scored any goals or provided assists in the current tournament."
  }, {
    name: "Randal Kolo Muani",
    country: "France",
    position: "Forward",
    goals: 1,
    assists: 1,
    image: "https://bfldeliverysc.blob.core.windows.net/results/11384f2a3440477eb2c8f94de92fd122/sample.jpeg?se=2024-11-11T17%3A22%3A51Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=i5tmeZAg2AvpdrSDV3pF6pS24qtOCK9RthWCpQUQGjU%3D",
    rankChange: 0,
    alt: "The image associated with Randal Kolo Muani features him in a dynamic pose typical of a football forward. He is dressed in a blue jersey, representing the France national team, adorned with the national emblem. His expression is focused and determined, indicative of his role in the game. Kolo Muani has short, dark hair and is captured mid-action, possibly during a match, emphasizing his athleticism and agility. The background is likely blurred, keeping the focus on him as he showcases his skills on the field."
  }, {
    name: "Josko Gvardiol",
    country: "Croatia",
    position: "Defender",
    goals: 0,
    assists: 0,
    image: "https://bfldeliverysc.blob.core.windows.net/results/3329cadd4e0c40638d089ea46a3a6578/sample.jpeg?se=2024-11-11T17%3A22%3A58Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=HF7rqRQ63dHWRLV3643xFZpDQB/RmuSIc6LPIcd/0tI%3D",
    rankChange: -2,
    alt: "The image features Josko Gvardiol, a professional football player from Croatia. He is depicted as a defender, characterized by a strong and athletic build. Gvardiol is wearing a Croatian national team jersey, which is primarily red and white, showcasing a checkerboard pattern that symbolizes his team's identity. His expression conveys determination and focus, typical of a player in action on the field. The background of the image is likely blurred or neutral, bringing attention to Gvardiol himself. The absence of goals and assists indicates his role is more defensively oriented, emphasizing his contributions to the team's defensive strategies rather than offensive statistics."
  }, {
    name: "Dominik Szoboszlai",
    country: "Hungary",
    position: "Midfielder",
    goals: 2,
    assists: 1,
    image: "https://bfldeliverysc.blob.core.windows.net/results/5167a5da937c4cd092e19a81b9b0c6ca/sample.jpeg?se=2024-11-11T17%3A23%3A03Z&sp=r&sv=2024-11-04&sr=b&rsct=image/jpeg&sig=c9XxqSMt4YqL/CWPo1YeSR0aQ1NEU%2BC/VmYlINO%2BgO4%3D",
    rankChange: 1,
    alt: "The image features Dominik Szoboszlai, a Hungarian midfielder recognized for his impressive skills on the football field. He is depicted in a dynamic pose, showcasing his athletic build and determination. Szoboszlai has short, dark hair and is wearing a red and white football jersey, reflecting the colors of the Hungarian national team. His expression exudes focus and intensity, as he embodies the spirit of competitive sports. The background of the image is likely to be blurred, emphasizing his presence and highlighting his significance as a top performer in the FIFA World Cup, where he achieved 2 goals and 1 assist, with a rank change of +1."
  }];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">Top Performers of the Latest FIFA World Cup</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Celebrating the Best Football Talent</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="default" className="flex items-center bg-indigo-500 text-white hover:bg-indigo-600">
            <Share2 className="mr-2" /> Share
          </Button>
          <Button variant="secondary" className="flex items-center bg-purple-500 text-white hover:bg-purple-600">
            <Download className="mr-2" /> Download
          </Button>
        </div>
      </header>
      <main className="container mx-auto">
        <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-700">FIFA World Cup Top 10 Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.table className="min-w-full bg-white divide-y divide-gray-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">Rank</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Player</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Country</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Position</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Goals</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Assists</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Change</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {performers.map((performer, index) => (
                  <motion.tr key={index} className={`hover:bg-gray-100 transition-colors duration-200 ${index < 3 ? 'bg-green-100' : index >= performers.length - 3 ? 'bg-red-100' : ''}`} whileHover={{ scale: 1.02 }}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center space-x-2">
                      <Avatar className="mr-3">
                        <AvatarImage src={performer.image} alt={performer.name} />
                        <AvatarFallback>{performer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{performer.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2">
                      <Image src={countryFlags[performer.country]} alt={performer.country} width={24} height={16} className="inline-block" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 space-x-2">
                      <span>{performer.position}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                      {performer.goals}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                      {performer.assists}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                      {performer.rankChange > 0 ? (
                        <span className="text-green-500 flex items-center">
                          <ArrowUp className="mr-1" /> +{performer.rankChange}
                        </span>
                      ) : performer.rankChange < 0 ? (
                        <span className="text-red-500 flex items-center">
                          <ArrowDown className="mr-1" /> {Math.abs(performer.rankChange)}
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button variant="outline" className="flex items-center bg-indigo-500 text-white hover:bg-indigo-600">
              <Share2 className="mr-2" /> Share
            </Button>
            <Button variant="secondary" className="flex items-center bg-purple-500 text-white hover:bg-purple-600">
              <Download className="mr-2" /> Download
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; {new Date().getFullYear()} FIFA World Cup. All rights reserved.</p>
      </footer>
    </div>
  );
}
