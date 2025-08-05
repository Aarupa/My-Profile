import React from "react";

export const Contact = () => {
    return (
      <section className="h-screen w-full flex items-center justify-center bg-blue-100">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Contact</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li><a href="+919370570053">+91 9370570053</a></li>
            <li><a href="dghadge2002@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/dinesh-ghadge-05may02/">Linkdin</a></li>
          </ul>
        </div>
      </section>
    )
}