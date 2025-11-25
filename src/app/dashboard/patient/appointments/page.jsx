"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, Search, Filter, Plus, Video, Phone, MoreVertical, Edit, Trash2, Download } from "lucide-react";

export default function MyAppointments() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample appointments data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "30 mins",
      type: "In-person",
      status: "confirmed",
      location: "City Medical Center, Floor 3",
      reason: "Regular heart checkup",
      notes: "Please bring your recent test reports"
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      date: "2024-03-20",
      time: "2:30 PM",
      duration: "45 mins",
      type: "Video Call",
      status: "confirmed",
      location: "Telemedicine",
      reason: "Diabetes follow-up",
      notes: "Join 10 minutes before the appointment"
    },
    {
      id: 3,
      doctorName: "Dr. Emily Roberts",
      specialty: "Dermatologist",
      date: "2024-03-25",
      time: "11:15 AM",
      duration: "20 mins",
      type: "In-person",
      status: "pending",
      location: "Skin Care Clinic, Room 205",
      reason: "Skin allergy consultation",
      notes: ""
    },
    {
      id: 4,
      doctorName: "Dr. James Anderson",
      specialty: "Orthopedic",
      date: "2024-02-28",
      time: "3:00 PM",
      duration: "60 mins",
      type: "In-person",
      status: "completed",
      location: "Bone & Joint Center",
      reason: "Knee pain evaluation",
      notes: "Physical therapy recommended"
    },
    {
      id: 5,
      doctorName: "Dr. Lisa Garcia",
      specialty: "Psychiatrist",
      date: "2024-02-20",
      time: "4:45 PM",
      duration: "50 mins",
      type: "Video Call",
      status: "completed",
      location: "Telemedicine",
      reason: "Therapy session",
      notes: "Next session in 2 weeks"
    },
    {
      id: 6,
      doctorName: "Dr. Robert Kim",
      specialty: "General Physician",
      date: "2024-03-18",
      time: "9:00 AM",
      duration: "25 mins",
      type: "Phone Call",
      status: "cancelled",
      location: "Telemedicine",
      reason: "Cold and fever consultation",
      notes: "Rescheduled for next week"
    }
  ]);

  // Filter appointments based on active tab and search
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.reason.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'upcoming') {
      return matchesSearch && (appointment.status === 'confirmed' || appointment.status === 'pending');
    } else if (activeTab === 'past') {
      return matchesSearch && appointment.status === 'completed';
    } else if (activeTab === 'cancelled') {
      return matchesSearch && appointment.status === 'cancelled';
    }
    return matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed': return 'Confirmed';
      case 'pending': return 'Pending';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video Call': return <Video size={16} className="text-blue-600" />;
      case 'Phone Call': return <Phone size={16} className="text-green-600" />;
      default: return <MapPin size={16} className="text-[var(--brandColor)]" />;
    }
  };

  const viewAppointmentDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const cancelAppointment = (appointmentId) => {
    setAppointments(appointments.map(apt => 
      apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
    ));
  };

  const rescheduleAppointment = (appointmentId) => {
    // In real app, this would open a rescheduling form
    alert(`Reschedule appointment ${appointmentId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--bgLight)] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--textDark)] mb-2">
            My Appointments
          </h1>
          <p className="text-[var(--textLight)]">
            Manage and track your medical appointments
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)] border-l-4 border-[var(--brandColor)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--textLight)] text-sm">Upcoming</p>
                <p className="text-2xl font-bold text-[var(--textDark)]">
                  {appointments.filter(a => a.status === 'confirmed' || a.status === 'pending').length}
                </p>
              </div>
              <Calendar className="text-[var(--brandColor)]" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)] border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--textLight)] text-sm">Completed</p>
                <p className="text-2xl font-bold text-[var(--textDark)]">
                  {appointments.filter(a => a.status === 'completed').length}
                </p>
              </div>
              <Clock className="text-green-500" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)] border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--textLight)] text-sm">Video Consult</p>
                <p className="text-2xl font-bold text-[var(--textDark)]">
                  {appointments.filter(a => a.type === 'Video Call').length}
                </p>
              </div>
              <Video className="text-blue-500" size={24} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)] border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--textLight)] text-sm">This Month</p>
                <p className="text-2xl font-bold text-[var(--textDark)]">
                  {appointments.filter(a => a.date.startsWith('2024-03')).length}
                </p>
              </div>
              <User className="text-purple-500" size={24} />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--textLight)]" size={20} />
              <input
                type="text"
                placeholder="Search by doctor, specialty, or reason..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[var(--borderLight)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent"
              />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-[var(--bgLight)] p-1 rounded-lg">
              {['upcoming', 'past', 'cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-[var(--brandColor)] shadow-sm'
                      : 'text-[var(--textLight)] hover:text-[var(--textDark)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* New Appointment Button */}
            <button className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)] transition-colors">
              <Plus size={18} />
              New Appointment
            </button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-12 text-center">
              <Calendar className="mx-auto text-[var(--textMuted)] mb-4" size={48} />
              <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2">
                No appointments found
              </h3>
              <p className="text-[var(--textLight)] mb-4">
                {searchTerm ? 'Try adjusting your search terms' : `You don't have any ${activeTab} appointments`}
              </p>
              <button className="bg-[var(--brandColor)] text-white px-6 py-2 rounded-lg hover:bg-[var(--brandColorDark)] transition-colors">
                Book New Appointment
              </button>
            </div>
          ) : (
            filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl shadow-[var(--shadowCard)] p-6 hover:shadow-[var(--shadowHover)] transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Section - Doctor Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-[var(--brandColorLight)] rounded-full flex items-center justify-center">
                      <User className="text-[var(--brandColor)]" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[var(--textDark)]">
                          {appointment.doctorName}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </div>
                      <p className="text-[var(--textLight)] mb-2">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-[var(--textLight)]">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{appointment.time} ({appointment.duration})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(appointment.type)}
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      {appointment.location && (
                        <div className="flex items-center gap-1 mt-2 text-sm text-[var(--textLight)]">
                          <MapPin size={14} />
                          <span>{appointment.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Section - Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => viewAppointmentDetails(appointment)}
                      className="bg-[var(--brandColorLight)] text-[var(--brandColor)] px-4 py-2 rounded-lg hover:bg-[var(--brandColor)] hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                    
                    {(appointment.status === 'confirmed' || appointment.status === 'pending') && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => rescheduleAppointment(appointment.id)}
                          className="p-2 text-[var(--textLight)] hover:text-[var(--brandColor)] transition-colors"
                          title="Reschedule"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => cancelAppointment(appointment.id)}
                          className="p-2 text-[var(--textLight)] hover:text-red-600 transition-colors"
                          title="Cancel"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    )}
                    
                    {appointment.status === 'completed' && (
                      <button className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg hover:bg-green-200 transition-colors">
                        <Download size={16} />
                        Receipt
                      </button>
                    )}
                  </div>
                </div>

                {/* Reason */}
                <div className="mt-4 pt-4 border-t border-[var(--borderLight)]">
                  <p className="text-sm text-[var(--textLight)]">
                    <span className="font-medium text-[var(--textDark)]">Reason:</span> {appointment.reason}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Appointment Details Modal */}
      {showModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--textDark)] mb-2">
                    Appointment Details
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedAppointment.status)}`}>
                      {getStatusText(selectedAppointment.status)}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[var(--textLight)]">
                      {getTypeIcon(selectedAppointment.type)}
                      {selectedAppointment.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-[var(--textLight)] hover:text-[var(--textDark)] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Doctor Info */}
              <div className="bg-[var(--bgLight)] rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[var(--brandColorLight)] rounded-full flex items-center justify-center">
                    <User className="text-[var(--brandColor)]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--textDark)]">
                      {selectedAppointment.doctorName}
                    </h3>
                    <p className="text-[var(--brandColor)] font-medium">{selectedAppointment.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">Date & Time</label>
                    <div className="flex items-center gap-2 text-[var(--textDark)]">
                      <Calendar size={18} className="text-[var(--brandColor)]" />
                      <span>{selectedAppointment.date} at {selectedAppointment.time}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">Duration</label>
                    <div className="flex items-center gap-2 text-[var(--textDark)]">
                      <Clock size={18} className="text-[var(--brandColor)]" />
                      <span>{selectedAppointment.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">Appointment Type</label>
                    <div className="flex items-center gap-2 text-[var(--textDark)]">
                      {getTypeIcon(selectedAppointment.type)}
                      <span>{selectedAppointment.type}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-1">Location</label>
                    <div className="flex items-center gap-2 text-[var(--textDark)]">
                      <MapPin size={18} className="text-[var(--brandColor)]" />
                      <span>{selectedAppointment.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reason & Notes */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--textLight)] mb-2">Reason for Visit</label>
                  <p className="text-[var(--textDark)] bg-[var(--bgLight)] p-3 rounded-lg">
                    {selectedAppointment.reason}
                  </p>
                </div>
                {selectedAppointment.notes && (
                  <div>
                    <label className="block text-sm font-medium text-[var(--textLight)] mb-2">Additional Notes</label>
                    <p className="text-[var(--textDark)] bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      {selectedAppointment.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-[var(--borderLight)]">
                {(selectedAppointment.status === 'confirmed' || selectedAppointment.status === 'pending') && (
                  <>
                    <button
                      onClick={() => rescheduleAppointment(selectedAppointment.id)}
                      className="flex-1 bg-[var(--brandColorLight)] text-[var(--brandColor)] py-3 rounded-lg hover:bg-[var(--brandColor)] hover:text-white transition-colors font-medium"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => {
                        cancelAppointment(selectedAppointment.id);
                        setShowModal(false);
                      }}
                      className="flex-1 bg-red-100 text-red-700 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-medium"
                    >
                      Cancel Appointment
                    </button>
                  </>
                )}
                {selectedAppointment.status === 'completed' && (
                  <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex-1">
                    <Download size={18} />
                    Download Receipt
                  </button>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-100 text-[var(--textDark)] py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}