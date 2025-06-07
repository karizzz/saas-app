import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface CompanionListProps {
    title: string
    companions: Companion[]
    classNames: string
}

const CourseList = ({ title, companions, classNames }: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="font-bold text-2xl"> Recent Courses</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg ">Subjects</TableHead>
                        <TableHead className="text-lg text-right ">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions.map(({ id, name, topic, subject, duration }) => (
                        <TableRow key={id}>
                            <TableCell>
                            <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={35}
                                                height={35} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">
                                                {name}
                                            </p>
                                            <p className="text-lg">
                                                {topic}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className = 'subject-badge w-full max-md:hidden'>
                                    {subject}
                                </div>

                                
                            </TableCell>
                            <TableCell>
                                <div className = "flex justify-center items-center justify-end">
                                    <p className = "text-2xl">
                                        {duration} {' '} mins
                                    
                                    </p>
                                    <Image src = {'/icons/clock.svg'} alt = "clock" width = {12.5} height = {11} className = {'ml-2'} />
                                </div>
                            </TableCell>
                        </TableRow>

                    ))}
                    <TableRow>


                    </TableRow>
                </TableBody>
            </Table>

        </article>

    )
}

export default CourseList 