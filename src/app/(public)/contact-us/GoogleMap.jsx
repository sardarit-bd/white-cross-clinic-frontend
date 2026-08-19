"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden border border-gray-200">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.508579916374!2d-0.20494902312030885!3d51.5222311096193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876111f00712033%3A0x4c7359bc3bbbdc87!2sWhite%20Cross%20Clinic!5e0!3m2!1sen!2sbd!4v1764572056106!5m2!1sen!2sbd"
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
