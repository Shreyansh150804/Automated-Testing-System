"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  getUserProfile,
  updateUserProfile,
  uploadUserAvatar,
  deleteUserAvatar,
  getUserScans,
  clearAuth,
  isAuthenticated,
  getToken,
} from "../../services/api";
import {
  User,
  Mail,
  Calendar,
  Camera,
  Trash2,
  Shield,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  Edit3,
  Save,
  X,
  ExternalLink,
  ScanSearch,
  Bug,
  ArrowRight,
  Clock,
  Activity,
  UploadCloud,
  Globe,
  Check,
  AlertTriangle,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  // User profile state
  const [user, setUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(null);
  const [saveErrorMsg, setSaveErrorMsg] = useState(null);

  // Avatar upload state
  const fileInputRef = useRef(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarMsg, setAvatarMsg] = useState(null);
  const [avatarError, setAvatarError] = useState(null);

  // Scan history state
  const [scans, setScans] = useState([]);
  const [scansLoading, setScansLoading] = useState(true);
  const [scansError, setScansError] = useState(null);
  const [searchTarget, setSearchTarget] = useState("");

  // Check auth and load profile
  const fetchProfile = useCallback(async () => {
    if (!isAuthenticated()) {
      router.push("/Login?redirect=/profile");
      return;
    }

    setProfileLoading(true);
    setProfileError(null);

    try {
      const data = await getUserProfile();
      setUser(data);
      setEditName(data.name || "");
      setEditEmail(data.email || "");
    } catch (err) {
      console.error("Fetch profile error:", err);
      if (!isAuthenticated()) {
        router.push("/Login?redirect=/profile");
        return;
      }
      setProfileError(err.message || "Failed to load user profile");
    } finally {
      setProfileLoading(false);
    }
  }, [router]);

  // Load scans
  const fetchScans = useCallback(async () => {
    if (!isAuthenticated()) return;

    setScansLoading(true);
    setScansError(null);

    try {
      const scanList = await getUserScans();
      setScans(Array.isArray(scanList) ? scanList : []);
    } catch (err) {
      console.error("Fetch scans error:", err);
      setScansError(err.message || "Failed to load your scan history");
    } finally {
      setScansLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
    fetchScans();
  }, [fetchProfile, fetchScans]);

  // Handle avatar file selection & upload
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate MIME type
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!validTypes.includes(file.type.toLowerCase())) {
      setAvatarError(
        "Invalid file type. Please upload a JPEG, PNG, WEBP, or GIF."
      );
      return;
    }

    // Validate size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setAvatarError("File size exceeds 5MB limit. Please choose a smaller image.");
      return;
    }

    // Local preview
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
    setAvatarError(null);
    setAvatarMsg(null);
    setAvatarUploading(true);

    try {
      const updatedUser = await uploadUserAvatar(file);
      setUser(updatedUser);
      setAvatarMsg("Profile picture updated successfully.");
      setTimeout(() => setAvatarMsg(null), 4000);
    } catch (err) {
      console.error("Upload error:", err);
      setAvatarError(err.message || "Failed to upload image to Cloudinary.");
      setAvatarPreview(null);
    } finally {
      setAvatarUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Remove avatar
  const handleRemoveAvatar = async () => {
    if (!confirm("Are you sure you want to remove your profile picture?")) return;

    setAvatarUploading(true);
    setAvatarError(null);
    setAvatarMsg(null);

    try {
      const updatedUser = await deleteUserAvatar();
      setUser(updatedUser);
      setAvatarPreview(null);
      setAvatarMsg("Profile picture removed successfully.");
      setTimeout(() => setAvatarMsg(null), 4000);
    } catch (err) {
      setAvatarError(err.message || "Failed to remove avatar.");
    } finally {
      setAvatarUploading(false);
    }
  };

  // Save profile edits
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!editName.trim()) {
      setSaveErrorMsg("Name cannot be empty.");
      return;
    }

    setSavingProfile(true);
    setSaveErrorMsg(null);
    setSaveSuccessMsg(null);

    try {
      const updated = await updateUserProfile({
        name: editName.trim(),
        email: editEmail.trim(),
      });
      setUser(updated);
      setIsEditing(false);
      setSaveSuccessMsg("Profile information updated successfully.");
      setTimeout(() => setSaveSuccessMsg(null), 4000);
    } catch (err) {
      setSaveErrorMsg(err.message || "Failed to update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  // Cancel edits
  const handleCancelEdit = () => {
    if (user) {
      setEditName(user.name || "");
      setEditEmail(user.email || "");
    }
    setIsEditing(false);
    setSaveErrorMsg(null);
  };

  // Logout handler
  const handleLogout = () => {
    clearAuth();
    router.push("/");
    router.refresh();
  };

  // View report helper: stores scan into last_scan_result and navigates to /report
  const handleViewReport = (scan) => {
    try {
      localStorage.setItem("last_scan_result", JSON.stringify(scan));
    } catch (err) {
      console.error("Storage error:", err);
    }
    const scanId = scan.id || scan.scanId;
    if (scanId) {
      router.push(`/report?id=${encodeURIComponent(scanId)}`);
    } else {
      router.push("/report");
    }
  };

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "Not available";
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "Not available";
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Not available";
    }
  };

  // Filtered scans for search
  const filteredScans = scans.filter((s) => {
    if (!searchTarget.trim()) return true;
    const q = searchTarget.toLowerCase().trim();
    return (
      (s.target || "").toLowerCase().includes(q) ||
      (s.id || "").toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[150px]" />
      </div>

      {/* Global Navbar */}
      <Navbar />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Top Header / Breadcrumb */}
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 font-mono">
              <span>Account</span>
              <span>/</span>
              <span className="text-zinc-300">Auditor Profile</span>
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              User Profile &amp; Settings
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Manage your vulNexa identity, authentication settings, and audit history.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition"
            >
              Operations Dashboard
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/[0.04] text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <LogOut size={13} />
              <span>Logout</span>
            </button>
          </div>
        </section>

        {/* Global Loading / Error */}
        {profileLoading && (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-400">
            <RefreshCw size={24} className="animate-spin text-zinc-200" />
            <p className="text-sm">Loading auditor profile...</p>
          </div>
        )}

        {profileError && (
          <div className="mt-8 p-4 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle size={18} />
              <span>{profileError}</span>
            </div>
            <button
              onClick={fetchProfile}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium text-white transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Main Content when user is loaded */}
        {!profileLoading && user && (
          <div className="mt-10 space-y-12">
            {/* Notifications */}
            <AnimatePresence>
              {saveSuccessMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <CheckCircle2 size={16} />
                  <span>{saveSuccessMsg}</span>
                </motion.div>
              )}

              {saveErrorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm flex items-center gap-3"
                >
                  <AlertCircle size={16} />
                  <span>{saveErrorMsg}</span>
                </motion.div>
              )}

              {avatarMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-2xl border border-white/20 bg-white/[0.05] text-white text-sm flex items-center gap-3"
                >
                  <CheckCircle2 size={16} />
                  <span>{avatarMsg}</span>
                </motion.div>
              )}

              {avatarError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-2xl border border-white/20 bg-red-950/40 text-red-300 text-sm flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={16} className="text-red-400 shrink-0" />
                    <span className="leading-relaxed">{avatarError}</span>
                  </div>
                  <button
                    onClick={() => setAvatarError(null)}
                    className="text-zinc-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Profile Card & Avatar */}
            <div className="grid lg:grid-cols-[320px_1fr] gap-8">
              {/* LEFT: Avatar & Quick Actions */}
              <div className="rounded-3xl border border-white/10 bg-[#080808] p-6 flex flex-col items-center text-center">
                {/* Avatar Display */}
                <div className="relative group w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-black flex items-center justify-center">
                  {avatarUploading ? (
                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-2 z-20">
                      <RefreshCw size={24} className="animate-spin text-white" />
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-300">
                        Uploading...
                      </span>
                    </div>
                  ) : null}

                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : user.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt={user.name || "Avatar"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.04] text-white">
                      <span className="text-4xl font-bold uppercase tracking-tight">
                        {user.name ? user.name.charAt(0) : "U"}
                      </span>
                    </div>
                  )}

                  {/* Hover upload overlay */}
                  {!avatarUploading && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 text-white cursor-pointer"
                      title="Upload new picture"
                    >
                      <Camera size={20} />
                      <span className="text-[11px] font-medium">Change Photo</span>
                    </button>
                  )}
                </div>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  {user.name || "Auditor"}
                </h2>
                <p className="text-xs text-zinc-400 font-mono mt-1 truncate max-w-[260px]">
                  {user.email}
                </p>

                {/* Avatar Action Buttons */}
                <div className="mt-6 w-full flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={avatarUploading}
                    className="w-full py-2.5 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white hover:text-black transition text-xs font-medium flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <UploadCloud size={14} />
                    <span>Upload New Photo</span>
                  </button>

                  {user.profileImageUrl && (
                    <button
                      type="button"
                      onClick={handleRemoveAvatar}
                      disabled={avatarUploading}
                      className="w-full py-2 rounded-xl text-xs text-zinc-500 hover:text-red-400 hover:bg-white/[0.02] transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Trash2 size={13} />
                      <span>Remove Photo</span>
                    </button>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 w-full text-left space-y-3 text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-zinc-500" />
                      Member Since
                    </span>
                    <span className="font-mono text-zinc-200">
                      {formatDate(user.createdAt).slice(0, 11)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Shield size={13} className="text-zinc-500" />
                      Account Role
                    </span>
                    <span className="font-mono text-zinc-200">Security Analyst</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-zinc-500" />
                      Last Updated
                    </span>
                    <span className="font-mono text-zinc-200">
                      {formatDate(user.updatedAt).slice(0, 11)}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Profile Details & Form */}
              <div className="rounded-3xl border border-white/10 bg-[#080808] p-7 sm:p-9">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      Update your account credentials and personal display details.
                    </p>
                  </div>

                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/[0.03] text-xs font-medium text-zinc-200 hover:text-white hover:bg-white/[0.08] transition cursor-pointer"
                    >
                      <Edit3 size={13} />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>

                {/* Profile View or Edit Form */}
                {isEditing ? (
                  <form onSubmit={handleSaveProfile} className="mt-6 space-y-5">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full mt-2 bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/40 transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full mt-2 bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/40 transition font-mono"
                      />
                      <p className="mt-1.5 text-[11px] text-zinc-500">
                        Note: Changing your email will update your login credentials.
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={savingProfile}
                        className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-medium hover:bg-zinc-200 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {savingProfile ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Saving Changes...</span>
                          </>
                        ) : (
                          <>
                            <Save size={13} />
                            <span>Save Changes</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        disabled={savingProfile}
                        className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="mt-6 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                          Full Name
                        </p>
                        <p className="mt-2 text-base font-medium text-white">
                          {user.name || "Not specified"}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                          Email Address
                        </p>
                        <p className="mt-2 text-base font-mono text-zinc-200 truncate">
                          {user.email || "Not specified"}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                          Account Identifier
                        </p>
                        <p className="mt-2 text-xs font-mono text-zinc-400 truncate">
                          {user.id || "usr_session"}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                          Account Registration
                        </p>
                        <p className="mt-2 text-sm text-zinc-300">
                          {formatDate(user.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Security notice card */}
                    <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5">
                      <Shield className="text-zinc-400 mt-0.5 shrink-0" size={18} />
                      <div className="text-xs leading-relaxed text-zinc-400">
                        <p className="font-medium text-zinc-200">
                          Security Assurance
                        </p>
                        <p className="mt-1">
                          All scan reports, audit histories, and profile assets are
                          cryptographically bound to your user ID. Session tokens expire
                          in 7 days and must be renewed via login.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION: Personal Scan History */}
            <section id="scan-history" className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <ScanSearch size={18} className="text-zinc-400" />
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Personal Scan History
                    </h2>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    All vulnerability audit scans initiated by your account.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Filter targets..."
                      value={searchTarget}
                      onChange={(e) => setSearchTarget(e.target.value)}
                      className="bg-black/60 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-white/30 transition w-44 font-mono"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={fetchScans}
                    disabled={scansLoading}
                    className="p-2 border border-white/10 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer disabled:opacity-50"
                    title="Refresh scans"
                  >
                    <RefreshCw
                      size={14}
                      className={scansLoading ? "animate-spin" : ""}
                    />
                  </button>

                  <Link
                    href="/scan"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-medium transition"
                  >
                    <span>New Scan</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Scan Error State */}
              {scansError && (
                <div className="mt-6 p-4 rounded-2xl border border-white/15 bg-white/[0.03] text-sm text-zinc-300 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <AlertCircle size={16} className="text-red-400" />
                    <span>{scansError}</span>
                  </div>
                  <button
                    onClick={fetchScans}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium text-white transition"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Scan Loading State */}
              {scansLoading && (
                <div className="py-16 flex flex-col items-center justify-center gap-3 text-zinc-400">
                  <RefreshCw size={20} className="animate-spin text-zinc-300" />
                  <p className="text-xs">Retrieving your personal scan records...</p>
                </div>
              )}

              {/* Scans Content */}
              {!scansLoading && !scansError && (
                <>
                  {filteredScans.length === 0 ? (
                    <div className="mt-8 rounded-3xl border border-dashed border-white/10 p-12 text-center bg-[#080808]/50">
                      <ScanSearch className="mx-auto text-zinc-600" size={36} />
                      <h3 className="mt-4 text-base font-medium text-zinc-200">
                        {searchTarget ? "No matching scans found" : "No scans performed yet"}
                      </h3>
                      <p className="mt-2 text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
                        {searchTarget
                          ? "Try searching for a different domain or clear the search filter."
                          : "Run your first OWASP vulnerability scan against any authorized web asset to view findings, security scores, and remediation reports."}
                      </p>
                      {!searchTarget && (
                        <Link
                          href="/scan"
                          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-medium hover:bg-zinc-200 transition"
                        >
                          <ScanSearch size={14} />
                          <span>Run First Scan</span>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] text-left text-xs">
                          <thead>
                            <tr className="border-b border-white/10 text-zinc-400 bg-white/[0.02]">
                              <th className="px-6 py-4 font-mono uppercase tracking-wider">
                                Target Website
                              </th>
                              <th className="px-6 py-4 font-mono uppercase tracking-wider">
                                Date &amp; Time
                              </th>
                              <th className="px-6 py-4 font-mono uppercase tracking-wider">
                                Security Score
                              </th>
                              <th className="px-6 py-4 font-mono uppercase tracking-wider">
                                Findings &amp; Breakdown
                              </th>
                              <th className="px-6 py-4 font-mono uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-4 font-mono uppercase tracking-wider text-right">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {filteredScans.map((scan, idx) => {
                              const score = scan.scoreDetails?.score ?? 100;
                              const summary = scan.summary || {};
                              const findings = scan.findings || [];
                              const totalFindings =
                                summary.failed ??
                                findings.filter((f) => f.status === "Fail").length;
                              const critical = summary.critical ?? 0;
                              const high = summary.high ?? 0;
                              const medium = summary.medium ?? 0;
                              const low = summary.low ?? 0;

                              const statusStr = (scan.status || "Completed").toLowerCase();
                              const isCompleted =
                                statusStr === "completed" || statusStr === "success";

                              return (
                                <tr
                                  key={scan.id || scan.scanId || idx}
                                  className="border-b border-white/[0.05] hover:bg-white/[0.025] transition last:border-0"
                                >
                                  {/* Target */}
                                  <td className="px-6 py-4 font-medium text-white max-w-[240px]">
                                    <div className="flex items-center gap-2 truncate">
                                      <Globe
                                        size={14}
                                        className="text-zinc-500 shrink-0"
                                      />
                                      <span className="truncate font-mono">
                                        {scan.target || "Unknown target"}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Date */}
                                  <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                                    {formatDate(scan.scannedAt || scan.createdAt)}
                                  </td>

                                  {/* Score */}
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                                      <span
                                        className={`font-semibold ${
                                          score >= 85
                                            ? "text-emerald-400"
                                            : score >= 70
                                            ? "text-yellow-400"
                                            : "text-red-400"
                                        }`}
                                      >
                                        {score}/100
                                      </span>
                                      <span className="text-[10px] text-zinc-400">
                                        {scan.scoreDetails?.label || "Audited"}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Findings Breakdown */}
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="font-medium text-white mr-1">
                                        {totalFindings} issues
                                      </span>
                                      {critical > 0 && (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/15 text-red-300 border border-red-500/20 font-mono">
                                          {critical}C
                                        </span>
                                      )}
                                      {high > 0 && (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-orange-500/15 text-orange-300 border border-orange-500/20 font-mono">
                                          {high}H
                                        </span>
                                      )}
                                      {medium > 0 && (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-yellow-500/15 text-yellow-300 border border-yellow-500/20 font-mono">
                                          {medium}M
                                        </span>
                                      )}
                                      {low > 0 && (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-500/15 text-zinc-300 border border-white/10 font-mono">
                                          {low}L
                                        </span>
                                      )}
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] border ${
                                        isCompleted
                                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                          : "border-white/10 bg-white/5 text-zinc-300"
                                      }`}
                                    >
                                      {isCompleted ? (
                                        <Check size={11} />
                                      ) : (
                                        <Clock size={11} />
                                      )}
                                      {scan.status || "Completed"}
                                    </span>
                                  </td>

                                  {/* Action */}
                                  <td className="px-6 py-4 text-right whitespace-nowrap">
                                    <button
                                      type="button"
                                      onClick={() => handleViewReport(scan)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
                                    >
                                      <span>View Report</span>
                                      <ExternalLink size={12} />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="px-6 py-3 border-t border-white/10 text-zinc-500 text-[11px] flex items-center justify-between">
                        <span>Showing {filteredScans.length} personal scan records</span>
                        <span className="font-mono">vulNexa Security Engine v2.0</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
