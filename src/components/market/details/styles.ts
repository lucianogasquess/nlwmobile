import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[600],
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[100],
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
    marginTop: 12,
    marginBottom: 32,
    lineHeight: 22,
  },
  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[100],
    marginBottom: 12,
  },
  rule: {},
})