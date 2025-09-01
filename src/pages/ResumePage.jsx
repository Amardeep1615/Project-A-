// src/components/ResumeMaker.jsx
import React, { useState } from "react";

const ResumeMaker = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">📝 Resume Maker</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {/* Photo Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full p-2 border rounded"
          />
        </form>

        {/* Resume Preview Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
          )}
          <h3 className="text-2xl font-bold mb-2 text-center">{formData.fullName || "Your Name"}</h3>
          <p className="text-gray-600 mb-1 text-center">{formData.email || "email@example.com"}</p>
          <p className="text-gray-600 mb-3 text-center">{formData.phone || "123-456-7890"}</p>

          <div className="mb-3">
            <h4 className="font-semibold">Education</h4>
            <p>{formData.education || "Your education details"}</p>
          </div>

          <div className="mb-3">
            <h4 className="font-semibold">Experience</h4>
            <p>{formData.experience || "Your work experience"}</p>
          </div>

          <div>
            <h4 className="font-semibold">Skills</h4>
            <p>{formData.skills || "Your skills"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeMaker;
