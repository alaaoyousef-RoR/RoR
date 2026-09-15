import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  Search, 
  Bell, 
  User, 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  GraduationCap, 
  CreditCard, 
  Clock, 
  MessageSquare,
  ChevronDown,
  Filter,
  DollarSign,
  TrendingUp,
  BookOpen,
  AlertCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Calendar, label: "Attendance", active: false },
  { icon: FileText, label: "Assignments", active: false },
  { icon: GraduationCap, label: "Marks", active: false },
  { icon: CreditCard, label: "Fees", active: false },
  { icon: Clock, label: "Timetable", active: false },
  { icon: MessageSquare, label: "Notices", active: false },
  { icon: User, label: "Profile", active: false },
];

const mockAssignments = [
  { id: 1, title: "Data Structures Project", subject: "Computer Science", dueDate: "2024-08-28", status: "pending" },
  { id: 2, title: "Linear Algebra Quiz", subject: "Mathematics", dueDate: "2024-08-30", status: "submitted" },
  { id: 3, title: "Digital Logic Report", subject: "Electronics", dueDate: "2024-09-02", status: "pending" },
];

const mockMarks = [
  { subject: "Computer Science", marks: 85, total: 100, grade: "A" },
  { subject: "Mathematics", marks: 78, total: 100, grade: "B+" },
  { subject: "Physics", marks: 92, total: 100, grade: "A+" },
  { subject: "Electronics", marks: 80, total: 100, grade: "A-" },
];

const mockNotices = [
  { id: 1, title: "Semester Exam Schedule Released", date: "2024-08-25", type: "important" },
  { id: 2, title: "Library Timings Extended", date: "2024-08-24", type: "general" },
];

export function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("Computer Science");
  const [selectedSemester, setSelectedSemester] = useState("5");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-teal-50 to-purple-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white/90 backdrop-blur-sm border-r border-indigo-100 shadow-sm z-30">
        {/* Logo */}
        <div className="flex items-center space-x-3 p-6 border-b border-indigo-100">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg text-gray-800">College ERP</h1>
            <p className="text-xs text-gray-600">Student Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-gradient-to-r from-indigo-500 to-teal-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-indigo-100 shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl text-gray-800">Dashboard</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80 bg-gray-50 border-gray-200 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/api/placeholder/32/32" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <span>John Smith</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Change Password</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex">
          {/* Main Content Area */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Attendance Card */}
              <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">Attendance Summary</CardTitle>
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-gray-800">85.6%</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                    </div>
                    <Progress value={85.6} className="h-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Classes Attended: 137</span>
                      <span>Total Classes: 160</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fees Card */}
              <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">Fee Status</CardTitle>
                  <DollarSign className="w-5 h-5 text-teal-600" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-gray-800">₹15,000</span>
                      <Badge variant="destructive">Pending</Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Semester 5 Fees</p>
                      <p>Due Date: September 15, 2024</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700">
                      Pay Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Assignments Card */}
              <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <span>Upcoming Assignments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAssignments.slice(0, 3).map((assignment) => (
                      <div key={assignment.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div>
                          <p className="text-sm text-gray-800">{assignment.title}</p>
                          <p className="text-xs text-gray-600">{assignment.subject}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-600">{assignment.dueDate}</p>
                          <Badge variant={assignment.status === "pending" ? "destructive" : "secondary"} className="text-xs">
                            {assignment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Marks Card */}
              <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span>Latest Marks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockMarks.slice(0, 4).map((mark, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-800">{mark.subject}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-600">{mark.marks}/{mark.total}</span>
                            <Badge variant="secondary" className="text-xs">{mark.grade}</Badge>
                          </div>
                        </div>
                        <div className="w-16">
                          <Progress value={(mark.marks / mark.total) * 100} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notices Card */}
            <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  <span>Latest Notices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockNotices.map((notice) => (
                    <div key={notice.id} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50">
                      <AlertCircle className={`w-5 h-5 mt-0.5 ${notice.type === 'important' ? 'text-red-500' : 'text-blue-500'}`} />
                      <div className="flex-1">
                        <h4 className="text-sm text-gray-800">{notice.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{notice.date}</p>
                      </div>
                      <Badge variant={notice.type === 'important' ? 'destructive' : 'secondary'} className="text-xs">
                        {notice.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="w-80 p-6 space-y-6">
            {/* Mini Profile Card */}
            <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/api/placeholder/80/80" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg text-gray-800">John Smith</h3>
                    <p className="text-sm text-gray-600">Student ID: 2021CS101</p>
                    <p className="text-sm text-gray-600">Computer Science</p>
                  </div>
                  <Separator />
                  <div className="w-full space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">CGPA:</span>
                      <span className="text-gray-800">8.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Semester:</span>
                      <span className="text-gray-800">5th</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year:</span>
                      <span className="text-gray-800">3rd Year</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Filters Card */}
            <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-indigo-600" />
                  <span>Quick Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Department</label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Mechanical">Mechanical</SelectItem>
                      <SelectItem value="Civil">Civil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Semester</label>
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Semester</SelectItem>
                      <SelectItem value="2">2nd Semester</SelectItem>
                      <SelectItem value="3">3rd Semester</SelectItem>
                      <SelectItem value="4">4th Semester</SelectItem>
                      <SelectItem value="5">5th Semester</SelectItem>
                      <SelectItem value="6">6th Semester</SelectItem>
                      <SelectItem value="7">7th Semester</SelectItem>
                      <SelectItem value="8">8th Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions Card */}
            <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Timetable
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Assignment
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Faculty
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}