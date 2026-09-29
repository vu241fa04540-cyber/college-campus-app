import { useMemo, useState } from 'react';

const collegeInfo = {
  name: 'Green Valley Institute of Technology',
  shortName: 'GVI Tech',
  motto: 'Learn. Lead. Launch.',
};

const notices = [
  {
    id: 1,
    title: 'Mid-Semester Exam Schedule Published',
    date: '12 Sep 2026',
    category: 'Exams',
    content: 'The exam timetable for all departments has been released. Check the college portal for seat numbers and room allocations.',
  },
  {
    id: 2,
    title: 'Holiday Notice for Gandhi Jayanti',
    date: '02 Oct 2026',
    category: 'Holiday',
    content: 'The college will remain closed on 02 October 2026 in observance of Gandhi Jayanti.',
  },
  {
    id: 3,
    title: 'Annual Tech Fest Registration Open',
    date: '18 Sep 2026',
    category: 'Activity',
    content: 'Students can register for the annual innovation competition, workshops, and hackathon events before the deadline.',
  },
];

const events = [
  {
    id: 1,
    title: 'Startup Expo 2026',
    date: '25 Oct 2026',
    time: '10:00 AM',
    location: 'Main Auditorium',
    type: 'Innovation',
  },
  {
    id: 2,
    title: 'Cultural Fest Weekend',
    date: '05 Nov 2026',
    time: '9:30 AM',
    location: 'Open Air Stage',
    type: 'Cultural',
  },
  {
    id: 3,
    title: 'Career Guidance Seminar',
    date: '14 Nov 2026',
    time: '1:00 PM',
    location: 'Seminar Hall 2',
    type: 'Career',
  },
];

const assignments = [
  { id: 1, subject: 'Data Structures', title: 'Binary Tree Assignment', due: '20 Sep', status: 'In Progress' },
  { id: 2, subject: 'Web Development', title: 'Responsive Landing Page', due: '23 Sep', status: 'Due Soon' },
  { id: 3, subject: 'Database Management', title: 'ER Diagram Analysis', due: '27 Sep', status: 'Pending' },
];

const faculty = [
  { id: 1, name: 'Dr. Aisha Sharma', department: 'Computer Science', subject: 'Data Structures', contact: '+91 98765 43210', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2, name: 'Prof. Rohan Mehta', department: 'Information Technology', subject: 'Web Development', contact: '+91 91234 56789', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Dr. Neha Verma', department: 'Electronics', subject: 'Digital Systems', contact: '+91 99887 66554', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 4, name: 'Mr. Arjun Patel', department: 'Mechanical', subject: 'Thermodynamics', contact: '+91 97654 32109', photo: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 5, name: 'Dr. Sana Iqbal', department: 'Computer Science', subject: 'Machine Learning', contact: 'Demo: +91 00000 00005', photo: 'https://randomuser.me/api/portraits/women/52.jpg' },
  { id: 6, name: 'Prof. Kabir Das', department: 'Computer Science', subject: 'Code Development', contact: 'Demo: +91 00000 00006', photo: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { id: 7, name: 'Dr. Meera Joshi', department: 'AIML', subject: 'Cloud Computing', contact: 'Demo: +91 00000 00007', photo: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { id: 8, name: 'Prof. Imran Sheikh', department: 'Computer Science', subject: 'Database Systems', contact: 'Demo: +91 00000 00008', photo: 'https://randomuser.me/api/portraits/men/61.jpg' },
  { id: 9, name: 'Dr. Kavya Menon', department: 'Information Technology', subject: 'Cybersecurity', contact: 'Demo: +91 00000 00009', photo: 'https://randomuser.me/api/portraits/women/79.jpg' },
  { id: 10, name: 'Mr. Dev Malhotra', department: 'AIML', subject: 'Artificial Intelligence', contact: 'Demo: +91 00000 00010', photo: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { id: 11, name: 'Dr. Chika Nwosu', country: 'Nigeria', department: 'Computer Science', subject: 'Data Science', contact: 'Demo contact · Nigeria', photo: 'https://randomuser.me/api/portraits/women/42.jpg' },
  { id: 12, name: 'Prof. Wanjiku Otieno', country: 'Kenya', department: 'Electronics', subject: 'Embedded Systems', contact: 'Demo contact · Kenya', photo: 'https://randomuser.me/api/portraits/women/54.jpg' },
  { id: 13, name: 'Dr. Oliver Bennett', country: 'United Kingdom', department: 'Information Technology', subject: 'Cloud Infrastructure', contact: 'Demo contact · United Kingdom', photo: 'https://randomuser.me/api/portraits/men/85.jpg' },
  { id: 14, name: 'Prof. Yuki Tanaka', country: 'Japan', department: 'AIML', subject: 'Robotics', contact: 'Demo contact · Japan', photo: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

const subjects = [
  { code: 'CS101', name: 'Programming Fundamentals', credits: 4 },
  { code: 'CS205', name: 'Database Management Systems', credits: 4 },
  { code: 'IT306', name: 'Web Technologies', credits: 3 },
  { code: 'EC220', name: 'Digital Logic Design', credits: 3 },
  { code: 'ME110', name: 'Engineering Graphics', credits: 2 },
];

const notifications = [
  'Your assignment for Web Development is due in 2 days.',
  'Seminar registration closes today at 6:00 PM.',
  'New notice added: Mid-sem exam timetable is available.',
  'Faculty office hours updated for this week.',
];

const quickLinks = [
  { label: 'Results Portal', icon: '📊', page: 'results' },
  { label: 'Academic Calendar', icon: '📆', page: 'calendar' },
  { label: 'Library Access', icon: '📚', page: 'library' },
  { label: 'Transport Details', icon: '🚌', page: 'transport' },
];

const calendarItems = [
  { date: '02 Oct 2026', title: 'Gandhi Jayanti holiday', detail: 'Campus closed' },
  { date: '12 Oct 2026', title: 'Project proposal deadline', detail: 'Submit through your department' },
  { date: '25 Oct 2026', title: 'Startup Expo', detail: 'Main Auditorium · 10:00 AM' },
  { date: '05 Nov 2026', title: 'Cultural Fest', detail: 'Open Air Stage · 9:30 AM' },
  { date: '14 Nov 2026', title: 'Career Guidance Seminar', detail: 'Seminar Hall 2 · 1:00 PM' },
  { date: '10 Dec 2026', title: 'Semester examinations begin', detail: 'Final timetable to be confirmed' },
];

const resultItems = [
  { code: 'CS101', subject: 'Programming Fundamentals', assessment: 'Mid-semester', score: '84 / 100', status: 'Published' },
  { code: 'CS205', subject: 'Database Management Systems', assessment: 'Mid-semester', score: '78 / 100', status: 'Published' },
  { code: 'IT306', subject: 'Web Technologies', assessment: 'Lab assessment', score: 'Pending', status: 'In review' },
];

const libraryBooks = [
  { id: 1, title: 'Introduction to Algorithms', author: 'T. H. Cormen et al.', copies: 3 },
  { id: 2, title: 'Learning React', author: 'Alex Banks and Eve Porcello', copies: 2 },
  { id: 3, title: 'Database System Concepts', author: 'Abraham Silberschatz et al.', copies: 4 },
];

const transportRoutes = [
  { id: 'A', name: 'North Campus Route', stops: 'Central Station · City Library · North Gate', departure: '7:30 AM', return: '4:15 PM' },
  { id: 'B', name: 'East Campus Route', stops: 'River Park · Market Circle · East Gate', departure: '7:45 AM', return: '4:30 PM' },
  { id: 'C', name: 'South Campus Route', stops: 'University Road · Lake Junction · South Gate', departure: '8:00 AM', return: '4:45 PM' },
];

const placementStudents = [
  { name: 'Aarav Mehta', department: 'Computer Science', company: 'Nexa Systems', role: 'Software Engineer', package: '18.5 LPA' },
  { name: 'Ananya Iyer', department: 'AIML', company: 'BluePeak AI', role: 'Machine Learning Engineer', package: '16 LPA' },
  { name: 'Rohan Kapoor', department: 'Information Technology', company: 'CloudHarbor', role: 'Cloud Engineer', package: '14.2 LPA' },
  { name: 'Priya Desai', department: 'Computer Science', company: 'Vertex Digital', role: 'Data Analyst', package: '12 LPA' },
  { name: 'Zoya Khan', department: 'Electronics', company: 'CircuitWorks', role: 'Systems Engineer', package: '10.8 LPA' },
];

const jobOpenings = [
  { id: 1, company: 'Nexa Systems', role: 'Graduate Software Engineer', department: 'Computer Science', package: '8–18.5 LPA', openings: 12 },
  { id: 2, company: 'BluePeak AI', role: 'Junior Machine Learning Engineer', department: 'AIML', package: '7–16 LPA', openings: 6 },
  { id: 3, company: 'CloudHarbor', role: 'Cloud Support Associate', department: 'Information Technology', package: '5–9 LPA', openings: 8 },
];

const studentProfile = {
  name: 'Shoyab Akmal',
  rollNumber: 'CS-2047',
  department: 'Computer Science',
  year: '2nd Year',
  attendance: 92,
  email: 'priya.nair@student.gvit.edu',
};

const pageTitles = {
  home: 'Home',
  events: 'Events',
  notices: 'Notices',
  faculty: 'Faculty',
  profile: 'Student Profile',
  quickAccess: 'Quick Access',
  placements: 'Placements & Jobs',
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);
  const [requestedRoute, setRequestedRoute] = useState('');
  const [profile, setProfile] = useState(studentProfile);
  const [profileDraft, setProfileDraft] = useState(studentProfile);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [selectedFacultyId, setSelectedFacultyId] = useState(null);
  const [interestedJobs, setInterestedJobs] = useState([]);

  const filteredEvents = useMemo(
    () =>
      events.filter((event) =>
        [event.title, event.location, event.type].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      ),
    [searchTerm],
  );

  const filteredNotices = useMemo(
    () =>
      notices.filter((notice) =>
        [notice.title, notice.category, notice.content].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      ),
    [searchTerm],
  );

  const filteredFaculty = useMemo(
    () =>
      faculty.filter((person) =>
        [person.name, person.department, person.subject].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      ),
    [searchTerm],
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'calendar':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">2026 academic year · Sample schedule</p>
                <h2>Academic Calendar</h2>
              </div>
            </div>
            <div className="resource-list">
              {calendarItems.map((item) => (
                <article key={item.title} className="resource-row card-surface">
                  <time>{item.date}</time>
                  <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </section>
        );
      case 'results':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Computer Science · Sample records</p>
                <h2>Results Portal</h2>
              </div>
            </div>
            <div className="resource-list">
              {resultItems.map((item) => (
                <article key={item.code} className="result-row card-surface">
                  <span className="result-code">{item.code}</span>
                  <div><h3>{item.subject}</h3><p>{item.assessment}</p></div>
                  <strong>{item.score}</strong>
                  <span className="result-status">{item.status}</span>
                </article>
              ))}
            </div>
          </section>
        );
      case 'library':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Library catalogue · Sample availability</p>
                <h2>Library Access</h2>
              </div>
            </div>
            <div className="resource-list">
              {libraryBooks.map((book) => {
                const isReserved = reservedBooks.includes(book.id);
                return (
                  <article key={book.id} className="resource-row card-surface">
                    <div><h3>{book.title}</h3><p>{book.author} · {book.copies} copies available</p></div>
                    <button
                      type="button"
                      className={isReserved ? 'secondary-button' : 'primary-button'}
                      disabled={isReserved}
                      onClick={() => setReservedBooks((current) => [...current, book.id])}
                    >
                      {isReserved ? 'Reserved' : 'Reserve'}
                    </button>
                  </article>
                );
              })}
            </div>
            <p className="resource-note" aria-live="polite">{reservedBooks.length ? 'Reservation saved for this session.' : 'Library hours: Monday to Saturday, 8:00 AM–6:00 PM.'}</p>
          </section>
        );
      case 'transport':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Student transport · Sample routes</p>
                <h2>Transport Details</h2>
              </div>
            </div>
            <div className="resource-list">
              {transportRoutes.map((route) => (
                <article key={route.id} className="resource-row card-surface">
                  <div className="route-code">{route.id}</div>
                  <div className="route-info">
                    <h3>{route.name}</h3>
                    <p>{route.stops}</p>
                    <small>Outbound {route.departure} · Return {route.return}</small>
                  </div>
                  <button type="button" className="secondary-button" onClick={() => setRequestedRoute(route.id)}>
                    {requestedRoute === route.id ? 'Selected' : 'Select route'}
                  </button>
                </article>
              ))}
            </div>
            <p className="resource-note" aria-live="polite">{requestedRoute ? `Route ${requestedRoute} selected for this session.` : 'Choose a route to mark your transport preference.'}</p>
          </section>
        );
      case 'quickAccess':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Campus services</p>
                <h2>Quick Access</h2>
              </div>
            </div>
            <div className="link-grid">
              {quickLinks.map((item) => (
                <button type="button" key={item.label} className="link-tile" onClick={() => setCurrentPage(item.page)}>
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
            <div className="subjects-panel">
              <h3>Subjects</h3>
              <div className="subject-list">
                {subjects.map((subject) => (
                  <div key={subject.code} className="subject-item">
                    <span>{subject.code}</span>
                    <strong>{subject.name}</strong>
                    <small>{subject.credits} Credits</small>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'placements':
        return (
          <section className="page-card placement-page">
            <div className="section-header">
              <div>
                <p className="eyebrow">Career outcomes · Sample data</p>
                <h2>Placements &amp; Jobs</h2>
              </div>
            </div>

            <section className="placement-summary" aria-label="Placement summary">
              <article className="placement-stat card-surface">
                <span>Placement rate</span>
                <strong>72%</strong>
                <small>1,786 of 2,480 students</small>
              </article>
              <article className="placement-stat card-surface">
                <span>Highest package</span>
                <strong>18.5 LPA</strong>
                <small>Annual package</small>
              </article>
              <article className="placement-stat card-surface">
                <span>Companies hiring</span>
                <strong>26</strong>
                <small>Sample campus opportunities</small>
              </article>
            </section>

            <section className="placement-section">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Recent outcomes</p>
                  <h2>Student Placements</h2>
                </div>
              </div>
              <div className="placement-student-grid">
                {placementStudents.map((student) => (
                  <article key={student.name} className="placement-student card-surface">
                    <div className="placement-student-heading">
                      <span className="placement-initials" aria-hidden="true">{student.name.split(' ').map((part) => part[0]).join('')}</span>
                      <div><h3>{student.name}</h3><p>{student.department}</p></div>
                    </div>
                    <p><strong>{student.role}</strong> at {student.company}</p>
                    <div className="placement-package"><span>Package</span><strong>{student.package}</strong></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="placement-section">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Open opportunities · Sample listings</p>
                  <h2>Current Jobs</h2>
                </div>
              </div>
              <div className="resource-list">
                {jobOpenings.map((job) => {
                  const hasInterest = interestedJobs.includes(job.id);
                  return (
                    <article key={job.id} className="resource-row card-surface placement-job">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company} · {job.department}</p>
                        <small>{job.package} · {job.openings} openings</small>
                      </div>
                      <button
                        type="button"
                        className={hasInterest ? 'secondary-button' : 'primary-button'}
                        disabled={hasInterest}
                        onClick={() => setInterestedJobs((current) => [...current, job.id])}
                      >
                        {hasInterest ? 'Interest noted' : 'Register interest'}
                      </button>
                    </article>
                  );
                })}
              </div>
              <p className="resource-note" aria-live="polite">{interestedJobs.length ? 'Your interest is noted for this session.' : 'Figures and opportunities shown here are sample data.'}</p>
            </section>
          </section>
        );
      case 'events':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Upcoming</p>
                <h2>College Events</h2>
              </div>
            </div>
            <div className="event-list">
              {filteredEvents.map((event) => (
                <article key={event.id} className="event-item card-surface">
                  <div className="event-badge">{event.type}</div>
                  <h3>{event.title}</h3>
                  <div className="meta-grid">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <button
                    type="button"
                    className="primary-button"
                    disabled={registeredEvents.includes(event.id)}
                    onClick={() => setRegisteredEvents((current) => [...current, event.id])}
                  >
                    {registeredEvents.includes(event.id) ? 'Registered' : 'Register'}
                  </button>
                </article>
              ))}
            </div>
          </section>
        );
      case 'notices':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Important updates</p>
                <h2>Notices</h2>
              </div>
            </div>
            <div className="notice-list">
              {filteredNotices.map((notice) => (
                <article key={notice.id} className="notice-item card-surface">
                  <div className="notice-topline">
                    <span className="chip">{notice.category}</span>
                    <span>{notice.date}</span>
                  </div>
                  <h3>{notice.title}</h3>
                  <p>{notice.content}</p>
                </article>
              ))}
            </div>
          </section>
        );
      case 'faculty':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Faculty desk</p>
                <h2>Department Mentors</h2>
              </div>
            </div>
            <div className="faculty-grid">
              {filteredFaculty.map((person) => (
                <article key={person.id} className="faculty-card card-surface">
                  <div className="avatar faculty-avatar">
                    <span aria-hidden="true">{person.name.charAt(0)}</span>
                    <img
                      src={person.photo}
                      alt={`${person.name} profile portrait`}
                      loading="lazy"
                      onError={(event) => { event.currentTarget.hidden = true; }}
                    />
                  </div>
                  <h3>{person.name}</h3>
                  {person.country && <p><strong>Country:</strong> {person.country}</p>}
                  <p><strong>Department:</strong> {person.department}</p>
                  <p><strong>Subject:</strong> {person.subject}</p>
                  <p><strong>Contact:</strong> {person.contact}</p>
                  <button
                    type="button"
                    className="secondary-button faculty-profile-link"
                    onClick={() => {
                      setSelectedFacultyId(person.id);
                      setCurrentPage('facultyProfile');
                    }}
                  >
                    View Faculty Profile
                  </button>
                </article>
              ))}
            </div>
          </section>
        );
      case 'facultyProfile': {
        const person = faculty.find((entry) => entry.id === selectedFacultyId);
        return (
          <section className="page-card">
            <div className="section-header faculty-profile-header">
              <div>
                <p className="eyebrow">Faculty directory</p>
                <h2>Faculty Profile</h2>
              </div>
              <button type="button" className="secondary-button" onClick={() => setCurrentPage('faculty')}>
                Back to Faculty
              </button>
            </div>
            {person ? (
              <article className="faculty-profile-card card-surface">
                <div className="avatar faculty-avatar faculty-avatar-large">
                  <span aria-hidden="true">{person.name.charAt(0)}</span>
                  <img
                    src={person.photo}
                    alt={`${person.name} profile portrait`}
                    onError={(event) => { event.currentTarget.hidden = true; }}
                  />
                </div>
                <div className="faculty-profile-info">
                  <h3>{person.name}</h3>
                  <p className="faculty-profile-role">Faculty member</p>
                  <dl className="faculty-profile-details">
                    {person.country && <div><dt>Country</dt><dd>{person.country}</dd></div>}
                    <div><dt>Department</dt><dd>{person.department}</dd></div>
                    <div><dt>Subject</dt><dd>{person.subject}</dd></div>
                    <div><dt>Contact</dt><dd>{person.contact}</dd></div>
                  </dl>
                </div>
              </article>
            ) : (
              <p>Select a faculty member from the directory to view their profile.</p>
            )}
          </section>
        );
      }
      case 'profile':
        return (
          <section className="page-card">
            <div className="section-header">
              <div>
                <p className="eyebrow">Student record</p>
                <h2>Student Profile</h2>
              </div>
              {!isEditingProfile && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setProfileDraft(profile);
                    setIsEditingProfile(true);
                  }}
                >
                  Edit Profile
                </button>
              )}
            </div>
            <div className="profile-layout">
              <div className="profile-card card-surface">
                {isEditingProfile ? (
                  <form
                    className="profile-edit-form"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const updatedProfile = {
                        ...profileDraft,
                        name: profileDraft.name.trim(),
                        email: profileDraft.email.trim(),
                      };
                      setProfile(updatedProfile);
                      setProfileDraft(updatedProfile);
                      setIsEditingProfile(false);
                    }}
                  >
                    <div className="profile-edit-grid">
                      {[
                        { id: 'name', label: 'Full name', type: 'text' },
                        { id: 'rollNumber', label: 'Roll number', type: 'text' },
                        { id: 'department', label: 'Department', type: 'text' },
                        { id: 'year', label: 'Year', type: 'text' },
                        { id: 'email', label: 'Email', type: 'email' },
                      ].map((field) => (
                        <label key={field.id} className="profile-edit-field" htmlFor={`profile-${field.id}`}>
                          {field.label}
                          <input
                            id={`profile-${field.id}`}
                            type={field.type}
                            value={profileDraft[field.id]}
                            onChange={(event) => setProfileDraft((current) => ({ ...current, [field.id]: event.target.value }))}
                            required
                          />
                        </label>
                      ))}
                    </div>
                    <div className="profile-edit-actions">
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() => {
                          setProfileDraft(profile);
                          setIsEditingProfile(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="primary-button">Save Changes</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="profile-head">
                      <div className="avatar large">{profile.name.charAt(0)}</div>
                      <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.rollNumber}</p>
                      </div>
                    </div>
                    <div className="profile-stats">
                      <div><span>Department</span><strong>{profile.department}</strong></div>
                      <div><span>Year</span><strong>{profile.year}</strong></div>
                      <div><span>Email</span><strong>{profile.email}</strong></div>
                    </div>
                    <div className="attendance-row">
                      <label>Attendance</label>
                      <div className="attendance-bar">
                        <span style={{ width: `${profile.attendance}%` }}></span>
                      </div>
                      <strong>{profile.attendance}%</strong>
                    </div>
                  </>
                )}
              </div>
              <div className="mini-panel card-surface">
                <h3>Assignments</h3>
                <ul>
                  {assignments.map((item) => (
                    <li key={item.id}>
                      <span>{item.subject}</span>
                      <small>{item.status}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <section className="hero card-surface">
              <div>
                <p className="eyebrow">Welcome to</p>
                <h1>{collegeInfo.name}</h1>
                <p className="tagline">{collegeInfo.motto}</p>
                <div className="hero-actions">
                  <button type="button" className="primary-button" onClick={() => setCurrentPage('events')}>View Events</button>
                  <button type="button" className="secondary-button" onClick={() => setCurrentPage('notices')}>Check Notices</button>
                </div>
              </div>
              <div className="hero-summary">
                <div><strong>2,480</strong><span>Students</span></div>
                <div><strong>120+</strong><span>Faculty</span></div>
                <div><strong>18</strong><span>Departments</span></div>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card card-surface">
                <span>📢</span>
                <h3>Latest Notices</h3>
                <p>{notices.length} active updates</p>
              </div>
              <div className="stat-card card-surface">
                <span>📅</span>
                <h3>Upcoming Events</h3>
                <p>{events.length} scheduled</p>
              </div>
              <div className="stat-card card-surface">
                <span>📝</span>
                <h3>Assignments</h3>
                <p>{assignments.length} due soon</p>
              </div>
            </section>

            <section className="page-card">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Latest announcements</p>
                  <h2>College Notices</h2>
                </div>
              </div>
              <div className="notice-list compact-list">
                {notices.map((notice) => (
                  <article key={notice.id} className="notice-item card-surface">
                    <div className="notice-topline">
                      <span className="chip">{notice.category}</span>
                      <span>{notice.date}</span>
                    </div>
                    <h3>{notice.title}</h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="page-card">
              <div className="section-header">
                <div>
                  <p className="eyebrow">Student dashboard</p>
                  <h2>Upcoming Events</h2>
                </div>
              </div>
              <div className="event-list">
                {events.map((event) => (
                  <article key={event.id} className="event-item card-surface">
                    <div className="event-badge">{event.type}</div>
                    <h3>{event.title}</h3>
                    <div className="meta-grid">
                      <span>📅 {event.date}</span>
                      <span>⏰ {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">G</div>
          <div>
            <strong>{collegeInfo.shortName}</strong>
            <small>Campus Portal</small>
          </div>
        </div>

        <div className="topbar-actions">
          <label className="search-box" htmlFor="campus-search">
            <span>🔍</span>
            <input
              id="campus-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search info"
            />
          </label>
          <button type="button" className="notification-pill" onClick={() => setCurrentPage('notices')} aria-label={`Open notices, ${notifications.length} notifications`}>
            🔔 <span>{notifications.length}</span>
          </button>
          <button
            type="button"
            className="profile-settings-button"
            onClick={() => setCurrentPage('profile')}
            aria-label="Open profile settings"
            title="Profile settings"
          >
            <span className="profile-settings-avatar" aria-hidden="true">
              {profile.name.split(' ').map((namePart) => namePart[0]).join('')}
            </span>
          </button>
        </div>
      </header>

      <nav className="nav-tabs" aria-label="Main navigation">
        {Object.entries(pageTitles).map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={currentPage === key ? 'nav-tab active' : 'nav-tab'}
            aria-current={currentPage === key ? 'page' : undefined}
            onClick={() => setCurrentPage(key)}
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="content-wrapper">
        {renderPage()}
      </main>

      <aside className="right-panel card-surface">
        <div className="panel-header">
          <h3>Notifications</h3>
          <span>Live</span>
        </div>
        <ul className="notification-list">
          {notifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="subjects-panel">
          <h3>Subjects</h3>
          <div className="subject-list">
            {subjects.map((subject) => (
              <div key={subject.code} className="subject-item">
                <span>{subject.code}</span>
                <strong>{subject.name}</strong>
                <small>{subject.credits} Credits</small>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
