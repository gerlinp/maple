import { Frequency, Role } from "../../auth"

export type ProfileMember = {
  district: string
  id: string
  name: string
}

export type ContactInfo = {
  email: string
  phone?: string
  website?: string
}

export const SOCIAL_NETWORKS = ["linkedIn", "twitter", "instagram", "fb"] as const

export type SocialLinks = Partial<
  Record<(typeof SOCIAL_NETWORKS)[number], string>
>

export type Profile = {
  role?: Role
  displayName?: string
  fullName?: string
  representative?: ProfileMember
  senator?: ProfileMember
  public?: boolean
  notificationFrequency?: Frequency
  about?: string
  social?: SocialLinks
  profileImage?: string
  billsFollowing?: string[]
  requestingToBeOrg?: boolean
  orgContactInfo?: ContactInfo, 
  location?: string
}
