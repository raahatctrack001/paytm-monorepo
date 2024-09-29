import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prismaClient } from "@repo/database"

prismaClient.user

export default function Home() {
  return <div className="text-xl"> Hello world </div>
}
